import * as actions from './actions';
import {ActionType} from 'typesafe-actions';
import {KRStocks} from '../../api/krstocks';

export type KRStocksAction = ActionType<typeof actions>;

export type KRStocksState = {
    stocksContent: {
        loading: boolean;
        error: Error | null;
        data: KRStocks | null;
    };
};