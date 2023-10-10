export interface TickerResponse {
    request_id: string
    results: Results
    status: string
  }
  
  export interface Results {
    ticker: string
    name: string
    market: string
    locale: string
    primary_exchange: string
    type: string
    active: boolean
    currency_name: string
    cik: string
    composite_figi: string
    share_class_figi: string
    market_cap: number
    phone_number: string
    address: Address
    description: string
    sic_code: string
    sic_description: string
    ticker_root: string
    homepage_url: string
    total_employees: number
    list_date: string
    branding: Branding
    share_class_shares_outstanding: number
    weighted_shares_outstanding: number
    round_lot: number
  }
  
  export interface Address {
    address1: string
    city: string
    state: string
    postal_code: string
  }
  
  export interface Branding {
    logo_url: string
    icon_url: string
  }