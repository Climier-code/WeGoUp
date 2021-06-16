import {createReducer} from 'typesafe-actions';
import {USStocksState, USStocksAction} from './types';
import {GET_USSTOCK, GET_USSTOCK_SUCCESS, GET_USSTOCK_ERROR} from './actions';

const initialState: USStocksState = {
    stocksContent: {
        loading: false,
        error: null,
        data: null
    }
};

const dailyusstocks = createReducer<USStocksState, USStocksAction>(initialState, {
    [GET_USSTOCK]: state => ({
        ...state,
        stocksContent: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USSTOCK_SUCCESS]: (state, action) => ({
        ...state,
        stocksContent: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USSTOCK_ERROR]: (state, action) => ({
        ...state,
        stocksContent: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default dailyusstocks;