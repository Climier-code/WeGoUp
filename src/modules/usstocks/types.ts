import * as actions from './actions';
import {ActionType} from 'typesafe-actions';
import {USStocks} from '../../api/usstocks';

export type USStocksAction = ActionType<typeof actions>;

export type USStocksState = {
    stocksContent: {
        loading: boolean;
        error: Error | null;
        data: USStocks | null;
    };
};