import axios from 'axios';
import {KRStockAPIKEY} from '../key/apikey';

export async function getKRStocks(krstock: string) {


    const response = await axios.get<KRStocks>(
        `http://api.marketstack.com/v1/eod?access_key=${KRStockAPIKEY}&symbols=${krstock}.XKRX`
    );

    return response.data;
}

export interface KRStocks {
    pagination: Pagination;
    data:       Datum[];
}

export interface Datum {
    open:         number;
    high:         number;
    low:          number;
    close:        number;
    volume:       number;
    adj_high:     null;
    adj_low:      null;
    adj_close:    number;
    adj_open:     null;
    adj_volume:   null;
    split_factor: number;
    symbol:       Symbol;
    exchange:     Exchange;
    date:         string;
}

export enum Exchange {
    Xkrx = "XKRX",
}

export enum Symbol {
    The035420Xkrx = "035420.XKRX",
}

export interface Pagination {
    limit:  number;
    offset: number;
    count:  number;
    total:  number;
}