import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import StockInfo from './StockInfo';
import {getUSStockAsync} from '../../moudles/usstocks';
import SearchStockForm from './SearchStockForm';
import {Spin} from 'antd';
import styled from '@emotion/styled';

const LoadingBlock = styled.div`
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`;


function USStockLoader () {
    const {data, loading, error } = useSelector((state:RootState) => state.dailyusstocks.stocksContent);
    const dispatch = useDispatch();

    const onSubmitStockcode = (stockcode:string) => {
        dispatch(getUSStockAsync.request(stockcode));
    };


    return(
        <div>
            <SearchStockForm onSubmitStockcode={onSubmitStockcode} />
            {loading && <Spin tip="Loading..."/>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <StockInfo companyName={data.quote.companyName} nowPrice={data.quote.latestPrice} highPrice={data.quote.high} lowPrice={data.quote.low} />}
        </div>
    )
}

export default USStockLoader;