import {createReducer} from 'typesafe-actions';
import {KRStocksState, KRStocksAction} from './types';
import {GET_KRSTOCK, GET_KRSTOCK_SUCCESS, GET_KRSTOCK_ERROR} from './actions';

const initialState: KRStocksState = {
    stocksContent: {
        loading: false,
        error: null,
        data: null
    }
};

const dailystocks = createReducer<KRStocksState, KRStocksAction>(initialState, {
    [GET_KRSTOCK]: state => ({
        ...state,
        stocksContent: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_KRSTOCK_SUCCESS]: (state, action) => ({
        ...state,
        stocksContent: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_KRSTOCK_ERROR]: (state, action) => ({
        ...state,
        stocksContent: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default dailystocks;