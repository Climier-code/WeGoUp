import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { BitcoinCandles } from '../../api/bitcoin';

export type BitcoinAction = ActionType<typeof actions>;

export type BitcoinState = {
    bitcoinCandles : {
        loading: boolean;
        error: Error | null;
        data: BitcoinCandles | null;
    }
}