import axios from 'axios';


export async function getBitCandle(bitcoinname :string) {
    
    const response = await axios.get<BitcoinCandles> (
        `https://api.upbit.com/v1/candles/minutes/1?market=${bitcoinname}&count=200`
        
    );

    return response.data;
}

export type BitcoinCandles = BitcoinCandle[]

export interface BitcoinCandle {
    market:                  string;
    candle_date_time_utc:    Date;
    candle_date_time_kst:    Date;
    opening_price:           number;
    high_price:              number;
    low_price:               number;
    trade_price:             number;
    timestamp:               number;
    candle_acc_trade_price:  number;
    candle_acc_trade_volume: number;
    unit:                    number;
}