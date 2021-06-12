import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import StockInfo from './StockInfo';
import { getKRStockAsync } from '../../moudles/krstocks';
import SearchStockForm from './SearchStockForm';
import {Spin} from 'antd';
import { AdviceandStockBlock } from './USStockLoader';




function KRStockLoader () {
    const {data, loading, error } = useSelector((state:RootState) => state.dailykrstocks.stocksContent);
    const dispatch = useDispatch();

    const onSubmitStockcode = (stockcode:string) => {
        dispatch(getKRStockAsync.request(stockcode));
    };


    return(
        <AdviceandStockBlock>
            <SearchStockForm onSubmitStockcode={onSubmitStockcode} />
            {loading && <Spin tip="Loading..."/>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <StockInfo companyName={data.data[0].symbol} nowPrice={data.data[0].open} highPrice={data.data[0].high} lowPrice={data.data[0].low} />}
        </AdviceandStockBlock>
    )
}

export default KRStockLoader;