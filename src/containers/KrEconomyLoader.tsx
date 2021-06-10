import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../moudles';
import KrEconomy from '../components/KrEconomy';
import {getKRStockAsync} from '../moudles/krstocks';
import {getNewsAsync} from '../moudles/news';

function KrEconomyLoader() {
    const news =useSelector((state:RootState) => state.dailynews.newsContent);
    const krstock =useSelector((state:RootState) => state.dailykrstocks.stocksContent);
    const dispatch = useDispatch();

    const onKRStock = (stockValue: string) => {
        dispatch(getKRStockAsync.request(stockValue));
    };
    const onNews = (national: string) => {
        dispatch(getNewsAsync.request(national));
    };

    useEffect(() => {
        onKRStock('64');
        onNews('us');
    },[]);

    return (
        <div>
            {news.loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
            {news.error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {krstock.data && <KrEconomy stockValue={krstock.data.KeyStatisticList.row[0].DATA_VALUE} newsTitle="fill" /> }
            {news.data && <KrEconomy stockValue={31} newsTitle={news.data.articles[0].title} /> }
        </div>
    );
}

export default KrEconomyLoader;