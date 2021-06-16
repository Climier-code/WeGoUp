import { createReducer } from 'typesafe-actions';
import {  BitcoinState, BitcoinAction } from './types';
import { GET_BITCOIN, GET_BITCOIN_SUCCESS, GET_BITCOIN_ERROR } from './actions';

const initialState: BitcoinState = {
    bitcoinCandles: {
        loading: false,
        error: null,
        data: null
    }
};

const bitcoinMincandles = createReducer<BitcoinState, BitcoinAction>(initialState, {
    [GET_BITCOIN]: state => ({
        ...state,
        bitcoinCandles: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_BITCOIN_SUCCESS]: (state, action) => ({
        ...state,
        bitcoinCandles: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_BITCOIN_ERROR]: (state, action) => ({
        ...state,
        bitcoinCandles: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
})

export default bitcoinMincandles;