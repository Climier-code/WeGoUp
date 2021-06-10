import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import StockInfo from './StockInfo';
import {getUSStockAsync} from '../../moudles/usstocks';
import SearchStockForm from './SearchStockForm';

function USStockLoader () {
    const {data, loading, error } = useSelector((state:RootState) => state.dailyusstocks.stocksContent);
    const dispatch = useDispatch();

    const onSubmitStockcode = (stockcode:string) => {
        dispatch(getUSStockAsync.request(stockcode));
    };


    return(
        <>
            <SearchStockForm onSubmitStockcode={onSubmitStockcode} />
            {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <StockInfo companyName={data.quote.companyName} nowPrice={data.quote.latestPrice} highPrice={data.quote.high} lowPrice={data.quote.low} />}
        </>
    )
}

export default USStockLoader;