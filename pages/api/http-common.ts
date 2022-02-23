import axios from "axios";
import { IQuote, ICompanyProfile } from "../../interfaces";

export const YAHOO_FINANCE_API = "https://yfapi.net/";
export const FINNHUB_API_URL = "https://finnhub.io/api/v1/";
export const FINNHUB_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
export const YAHOO_KEY = process.env.NEXT_PUBLIC_YAHOO_FINANCE_API_KEY;

export async function getTrending(region: string) {
  try {
    const res = await axios.get(`${YAHOO_FINANCE_API}v1/finance/trending/${region}`, {
        headers: {
        'accept': 'application/json',
        'X-API-KEY': `${YAHOO_KEY}`
      },
    })
    const r = res.data.finance.result[0].quotes;
    console.log(`ARRAY OF SYMBOL OBJECTS: ${r}`);
    let trendList:Array<any> = [];
    const theList = await Promise.all(r.map(
      async function(i: any)  {
        const bypass = !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/.test(i.symbol);
        if (bypass) {
          let s = await getCompanyProfile(i.symbol) as ICompanyProfile;
          console.log(`NAME: ${s.name}, POSSIBLE: ${bypass}, SYMBOL: ${i.symbol}`);
          s.symbol = i.symbol;
          s.quote && trendList.push(s);
        }
      }
    ))
    return await trendList;

    // return res.data;
  } catch (error) {
    try {
      throw new Error(`Yahoo Finance has likely Hit it's rate limit`)
    } catch (e:any) {
      console.error(e.name + ': ' + e.message)
    }
    return { error };
  }
}

export async function getCompanyProfile(symbol: string) {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}stock/profile2`, {
      params: {
        token: FINNHUB_KEY,
        symbol,
      },
    })
  
    const r:ICompanyProfile = res.data;
    // check to see if the result has a TICKER Data Point which is ultimatly a Symbol
    if (r.ticker && /^[A-Za-z\s]*$/.test(r.ticker)) { 
      r.quote = await getQuote(r.ticker) as IQuote;
    };
    return await r;
  
  } catch (error) {
    return { error };
  }
}

export async function getQuote(symbol: string) {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}quote`, {
      params: {
        token: FINNHUB_KEY,
        symbol: symbol.toUpperCase(),
      },
    });
    const r:IQuote = res.data;
    return r;
  } catch (error) {
    return { error };
  }
}