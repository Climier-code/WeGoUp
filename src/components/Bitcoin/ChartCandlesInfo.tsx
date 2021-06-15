import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../moudles';
import {getBitcoinAsync} from '../../moudles/bitcoin';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';




function ChartCandlesInfo() {
    const {data, loading, error} = useSelector((state: RootState) => state.bitcoinMincandles.bitcoinCandles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBitcoinAsync.request("KRW-BTC"));
    },[])

    const state = {
        options: {
            chart: {
            id: "Bitcoin-Chart"
            },
            // xaxis: {
            //     categories: data && data.map(candle => (
            //         moment.unix(candle.timestamp).format("HH:MM")
            //     ))
            // }
        },
        series: [{
            data: data && data.slice(0).reverse().map(candle => ({
                x: moment(candle.timestamp).format("MM/DD HH:mm"),
                y: [candle.opening_price, candle.high_price, candle.low_price, candle.trade_price]
            }))
        }]
    };

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="candlestick"
                height={500}>
            </ReactApexChart>
        </div>
    );

}

export default ChartCandlesInfo;