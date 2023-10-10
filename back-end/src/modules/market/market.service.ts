import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment';
import { AxiosAdapter } from '../../commons/adapters/axios.adapter';
import { API_ENDPOINT_AGGS_V2, API_ENDPOINT_REFENRENCE_V3 } from '../../commons/constants';
import { AggregatesResponse, HistoryRequest, TickerGenericResponse, TickerResponse } from '../../models';
import { InfoTicker, } from '../../models/info-ticker.entity';
import { diaHabilAnterior } from '../../commons/helpers/dateUtils';

@Injectable()
export class MarketService {
    constructor(private readonly http: AxiosAdapter,
        private configService: ConfigService) { }

    async getHistoryData(input: HistoryRequest): Promise<AggregatesResponse> {

        try {
            return await this.http.get<AggregatesResponse>(`${this.configService.get<string>(API_ENDPOINT_AGGS_V2)}/${input.ticket}/range/1/day/${input.start}/${input.end}?adjusted=true&sort=asc&limit=120`);
        }
        catch (error) {
            return {
                ticker: '',
                queryCount: 0,
                resultsCount: 0,
                results: null,
                status: 'Error',
                request_id: '',
                count: 0,
                error: error.message
            };
        }

    }

    async setHistory(ticket: string): Promise<AggregatesResponse> {

        let dateNow = moment().format('YYYY-MM-DD');
        let aggregatesResponse = await this.getHistoryData({ ticket: ticket, start: dateNow, end: dateNow });

        if (aggregatesResponse.error && aggregatesResponse.error.includes('include this data timeframe')) {
            dateNow = diaHabilAnterior(dateNow);
            aggregatesResponse = await this.getHistoryData({ ticket: ticket, start: dateNow, end: dateNow });
        }

        return aggregatesResponse;
    }

    async getRealTimeData(ticker: string): Promise<InfoTicker> {
        let aggregatesResponse: AggregatesResponse;
        try {

            const ticketResponse = await this.http.get<TickerResponse>(`${this.configService.get<string>(API_ENDPOINT_REFENRENCE_V3)}/${ticker}`);
            aggregatesResponse = await this.setHistory(ticker);
            console.log(aggregatesResponse);
            return {
                logo: ticketResponse.results.branding ? ticketResponse.results.branding.logo_url : '',
                ticker: ticketResponse.results.ticker,
                name: ticketResponse.results.name,
                companyDescription: ticketResponse.results.description,
                closePrice: aggregatesResponse.results ? aggregatesResponse.results[0].c : 0,
                highestPrice: aggregatesResponse.results ? aggregatesResponse.results[0].h : 0,
                lowestPrice: aggregatesResponse.results ? aggregatesResponse.results[0].l : 0,
                openPrice: aggregatesResponse.results ? aggregatesResponse.results[0].o : 0,
                tradingVolume: aggregatesResponse.results ? aggregatesResponse.results[0].v : 0,
                status: aggregatesResponse.status,
                //error: aggregatesResponse.error
            };

        } catch (error) {
            return {
                logo: '',
                ticker: '',
                name: '',
                companyDescription: '',
                closePrice: 0,
                highestPrice: 0,
                lowestPrice: 0,
                openPrice: 0,
                tradingVolume: 0,
                status: 'Error',
                error: error.message,
            }
        }
    }

    async getAllTicker(): Promise<TickerGenericResponse> {

        try {

            return await this.http.get<TickerGenericResponse>(`${this.configService.get<string>(API_ENDPOINT_REFENRENCE_V3)}?active=true&order=asc&sort=ticker`);

        } catch (error) {
            return {
                count: 0,
                next_url: '',
                request_id: '',
                status: 'Error',
                error: error.message
            }
        }
    }

}

