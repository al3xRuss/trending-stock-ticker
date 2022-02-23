export interface IQuote {
    c: number;
    d: number;
    dp: number;
    h: number;
    l: number;
    o: number;
    pc: number;
}

export interface ICompanyProfile {
    country: string;
    currency: string;
    exchange: string;
    ipo: string;
    marketCapitalization: number;
    shareOutstanding: number;
    name: string;
    phone: string;
    ticker: string;
    symbol?: string;
    weburl: string;
    logo: string;
    finnhubIndustry: string;
    quote?: IQuote;
}

export interface ICompany {
    profile: ICompanyProfile;
    quote: IQuote;
}

export interface ICompanyNews {
    category: string;
    News: string;
    datetime: number;
    headline: string;
    id: number
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}