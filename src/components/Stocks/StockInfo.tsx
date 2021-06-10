import React from 'react';

type StockInfoProps = {
    companyName: string;
    nowPrice: number;
    highPrice: number;
    lowPrice: number;
}

function StockInfo ({companyName, nowPrice, highPrice, lowPrice}:StockInfoProps) {
    return (
        <div>
            <h1>{companyName}</h1>
            <h2>현재가: {nowPrice}</h2>
            <p>최고가: {highPrice}</p>
            <p>최저가: {lowPrice}</p>
        </div>
    )
}

export default StockInfo;