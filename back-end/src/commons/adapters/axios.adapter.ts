import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios'

import { HttpAdapter } from '../intefaces/http/http-adapter.interface';
import { API_POLIGON_TOKEN, API_POLYGON_BASE } from '../constants';


@Injectable()
export class AxiosAdapter implements HttpAdapter {

    constructor(private configService: ConfigService) { }
    private axios: AxiosInstance = axios;

    async get<T>(endpoint: string): Promise<T> {
        const config = {
            headers: {
                Authorization: `Bearer ${this.configService.get<string>(API_POLIGON_TOKEN)}`,
                Accept: 'application/json'
            },
        };

        const url = `${this.configService.get<string>(API_POLYGON_BASE)}${endpoint}`;
        console.log('URL:' + url);

        try {

            const { data } = await this.axios.get<T>(url, config);
            return data;

        } catch (error) {
            console.log(error)
            if (error.response.data.message) {
                throw new Error(error.response.data.message);
            }
            if (error.response.data.error) {
                throw new Error(error.response.data.error);
            }
            if (error.response.data) {
                throw new Error(error.response.data);
            }
        }
    }
}
