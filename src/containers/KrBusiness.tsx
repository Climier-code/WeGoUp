import React,{useEffect} from 'react';
import NewsList from '../components/News/NewsList';
import KRAdvice from '../components/Advice/KRAdvice';
import { BusinessBlock, StockAdviceBlock } from './UsBusiness';
import USStockLoader from '../components/Stocks/USStockLoader';

function KrBusiness() {


    return (
        <BusinessBlock>
            <StockAdviceBlock>
                <KRAdvice />
                <USStockLoader />
            </StockAdviceBlock>     
            <NewsList national="kr" />
        </BusinessBlock>
    );
}

export default KrBusiness;