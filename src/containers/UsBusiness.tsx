import React from 'react';
import NewsList from '../components/News/NewsList';
import USStockLoader from '../components/Stocks/USStockLoader';

function UsBusiness() {
    return (
        <div>
            <USStockLoader />
            <NewsList national="us" />
        </div>
    );
}

export default UsBusiness;