import { ICompanyProfile } from '../interfaces';

export const mockedCompanyProfile: ICompanyProfile = {
  "country": "US",
  "currency": "USD",
  "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
  "ipo": "1980-12-12",
  "marketCapitalization": 1415993,
  "name": "Apple Inc",
  "phone": "14089961010",
  "shareOutstanding": 4375.47998046875,
  "ticker": "AAPL",
  "weburl": "https://www.apple.com/",
  "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  "finnhubIndustry":"Technology",
  "quote": {
    c: 84.32,
    d: -1.17,
    dp: -1.3686,
    h: 86.9,
    l: 81.75,
    o: 86,
    pc: 85.49
  }
}

export const mockTrendingList = {
  "finance": {
    "result": [
      {
        "count": 20,
        "quotes": [
          { "symbol": "HD" },
          { "symbol": "TSLA" },
          { "symbol": "SOFI" },
          { "symbol": "TDOC" },
          { "symbol": "PANW" },
          { "symbol": "MELI" },
          { "symbol": "SPCE" },
          { "symbol": "AMD" },
          { "symbol": "FB" },
          { "symbol": "YM=F" },
          { "symbol": "PLTR" },
          { "symbol": "OSTK" },
          { "symbol": "ES=F" },
          { "symbol": "LOW" },
          { "symbol": "OCGN" },
          { "symbol": "M" },
          { "symbol": "O39.SI" },
          { "symbol": "DWAC" },
          { "symbol": "SHOP" },
          { "symbol": "MTOR" }
        ],
        "jobTimestamp": 1645589326592,
        "startInterval": 202202230300
      }
    ],
    "error": null
  }
}


