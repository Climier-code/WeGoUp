/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const riseorfallBlock = styled.div`

`;





type StockInfoProps = {
    companyName: string;
    nowPrice: number;
    highPrice: number;
    lowPrice: number;
    closePrice: number;
}

function StockInfo ({companyName, nowPrice, highPrice, lowPrice, closePrice}:StockInfoProps) {

    const riseorfall = closePrice > nowPrice ? 'red' : 'blue'
    return (
        <div>
            <h1>{companyName}</h1>
            <div css={css`
                color: ${riseorfall}
            `}>
                <h2>시가: {nowPrice}</h2>
                <p>최고가: {highPrice}</p>
                <p>최저가: {lowPrice}</p>
            </div>
            <p>한국 주식은 ₩, 미국 주식은 $ 단위 입니다.</p>
        </div>
    )
}

export default StockInfo;