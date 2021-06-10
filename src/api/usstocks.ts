import axios from 'axios';
import {USStockAPIKEY} from '../key/apikey';

export async function getUSStocks(usstock: string) {

    const response = await axios.get<USStocks>(
        `https://cloud.iexapis.com/stable/stock/${usstock}/book?token=${USStockAPIKEY}`
    );

    return response.data;
}

export interface USStocks {
    quote:       Quote;
    bids:        any[];
    asks:        any[];
    trades:      Trade[];
    systemEvent: SystemEvent;
}

export interface Quote {
    symbol:                 string;
    companyName:            string;
    primaryExchange:        string;
    calculationPrice:       string;
    open:                   number;
    openTime:               number;
    openSource:             string;
    close:                  number;
    closeTime:              number;
    closeSource:            string;
    high:                   number;
    highTime:               number;
    highSource:             string;
    low:                    number;
    lowTime:                number;
    lowSource:              string;
    latestPrice:            number;
    latestSource:           string;
    latestTime:             string;
    latestUpdate:           number;
    latestVolume:           number;
    iexRealtimePrice:       number;
    iexRealtimeSize:        number;
    iexLastUpdated:         number;
    delayedPrice:           number;
    delayedPriceTime:       number;
    oddLotDelayedPrice:     number;
    oddLotDelayedPriceTime: number;
    extendedPrice:          number;
    extendedChange:         number;
    extendedChangePercent:  number;
    extendedPriceTime:      number;
    previousClose:          number;
    previousVolume:         number;
    change:                 number;
    changePercent:          number;
    volume:                 number;
    iexMarketPercent:       number;
    iexVolume:              number;
    avgTotalVolume:         number;
    iexBidPrice:            number;
    iexBidSize:             number;
    iexAskPrice:            number;
    iexAskSize:             number;
    iexOpen:                number;
    iexOpenTime:            number;
    iexClose:               number;
    iexCloseTime:           number;
    marketCap:              number;
    peRatio:                number;
    week52High:             number;
    week52Low:              number;
    ytdChange:              number;
    lastTradeTime:          number;
    isUSMarketOpen:         boolean;
}

export interface SystemEvent {
    systemEvent: string;
    timestamp:   number;
}

export interface Trade {
    price:                 number;
    size:                  number;
    tradeId:               number;
    isISO:                 boolean;
    isOddLot:              boolean;
    isOutsideRegularHours: boolean;
    isSinglePriceCross:    boolean;
    isTradeThroughExempt:  boolean;
    timestamp:             number;
}