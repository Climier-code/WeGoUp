import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import StockInfo from './StockInfo';
import {getUSStockAsync} from '../../moudles/usstocks';
import SearchStockForm from './SearchStockForm';
import {Spin} from 'antd';
import styled from '@emotion/styled';

export const AdviceandStockBlock = styled.div`
    width: 20rem;
    height: 20rem;
    background: #6E6E6E;
    color: #ffffff;
    border-radius: 2rem;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin: 6rem;
    border: solid 0.15rem;
    box-shadow: 0.5rem 0.5rem;

    @media screen and (max-width: 768px) {
        margin: 3rem 0; 
    }
`;


function USStockLoader () {
    const {data, loading, error } = useSelector((state:RootState) => state.dailyusstocks.stocksContent);
    const dispatch = useDispatch();

    const onSubmitStockcode = (stockcode:string) => {
        dispatch(getUSStockAsync.request(stockcode));
    };


    return(
        <AdviceandStockBlock>
            <SearchStockForm onSubmitStockcode={onSubmitStockcode} />
            {loading && <Spin tip="Loading..."/>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <StockInfo companyName={data.quote.companyName} nowPrice={data.quote.latestPrice} highPrice={data.quote.high} lowPrice={data.quote.low} />}
        </AdviceandStockBlock>
    )
}

export default USStockLoader;