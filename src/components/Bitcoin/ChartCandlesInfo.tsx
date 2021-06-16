import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../modules';
import {getBitcoinAsync} from '../../modules/bitcoin';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';
import SearchBitcoinForm from './SearchBitcoinform';
import styled from '@emotion/styled';

const ChartBlock = styled.div`
    

    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 80%;

    }

    ReactApexChart {
        padding-top: 15rem;
    }
`;




function ChartCandlesInfo() {

    const [bitcoincode, setBitcoincode] = useState<string>("KRW-BTC");
    const {data, loading, error} = useSelector((state: RootState) => state.bitcoinMincandles.bitcoinCandles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBitcoinAsync.request("KRW-BTC"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onSubmitBitcoincode = (Bitcoincode:string) => {
        setBitcoincode(Bitcoincode);
        dispatch(getBitcoinAsync.request(Bitcoincode));
    };

    const state = {
        options: {
            chart: {
                id: "Bitcoin-Chart"
            },
            title : {
                text: bitcoincode,
                // style: {
                //     fontSize:  '2rem',
                //     fontWeight:  'bold',
                //     fontFamily:  undefined,
                //     color:  '#263238'
                // }
            }
            
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
        <ChartBlock>
            <SearchBitcoinForm onSubmitBitcoincode={onSubmitBitcoincode} />
            {loading && <p style={{ textAlign: 'center' }}>로딩 중</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && 
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    title = {bitcoincode}
                    type="candlestick"
                    height={800}
                    witdh={300}>
                </ReactApexChart>
            }
        </ChartBlock>
    );

}

export default ChartCandlesInfo;