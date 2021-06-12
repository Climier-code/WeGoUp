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
            <h2>시가: {nowPrice}</h2>
            <p>최고가: {highPrice}</p>
            <p>최저가: {lowPrice}</p>
            <p>한국 주식은 ₩, 미국 주식은 $ 단위 입니다.</p>
        </div>
    )
}

export default StockInfo;