import React from 'react';
import NewsList from '../components/News/NewsList';
import USStockLoader from '../components/Stocks/USStockLoader';
import styled from '@emotion/styled';
import USAdvice from '../components/Advice/USAdvice';



export const BusinessBlock = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;


    @media(min-width: 768px) {
        height: 100vh;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const StockAdviceBlock = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
`;

function UsBusiness() {
    return (
        <BusinessBlock>
            <StockAdviceBlock>
                <USAdvice />
                <USStockLoader />
            </StockAdviceBlock>     
            <NewsList national="us" />
        </BusinessBlock>
    );
}

export default UsBusiness;