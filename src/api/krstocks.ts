import axios from 'axios';
import {KRStockAPIKEY} from '../key/apikey';

export async function getKRStocks(krstock: string) {

    const krstockNumber = parseInt(krstock);

    const response = await axios.get<KRStocks>(
        `http://ecos.bok.or.kr/api/KeyStatisticList/${KRStockAPIKEY}/json/kr/${krstockNumber}/${krstockNumber+1}/`, {
            headers: {
                "Access-Control-Allow-Origin" : "*"
            }
        }
    );

    return response.data;
}

export interface KRStocks {
    KeyStatisticList: KeyStatisticList;
}

export interface KeyStatisticList {
    list_total_count: number;
    row:              Row[];
}

export interface Row {
    CLASS_NAME:   string;
    UNIT_NAME:    string;
    CYCLE:        string;
    KEYSTAT_NAME: string;
    DATA_VALUE:   number;
}