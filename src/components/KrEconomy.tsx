import axios from 'axios';
import React, { useEffect } from 'react';
import {KRStockAPIKEY} from '../key/apikey';

type KrEconomyProps = {
    stockValue: number;
    newsTitle:string;
};

function KrEconomy({stockValue, newsTitle}:KrEconomyProps) {

    const getstockdata = async () => {
        const response = await axios.get(
            `https://cloud.iexapis.com/stable/stock/tsla/book?token=pk_39fcbec303b34734a2cc9c0895494fa4`
        )

        return response.data;
    }

    useEffect(() => {
        console.log(getstockdata());
    },[])
    return (
        <div>
            <p>{stockValue}</p>
            <p>{newsTitle}</p>
        </div>
    )
}

export default KrEconomy;