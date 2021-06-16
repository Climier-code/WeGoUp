import {createAsyncAction} from 'typesafe-actions';
import {AxiosError} from 'axios';
import { BitcoinCandles } from '../../api/bitcoin';

export const GET_BITCOIN = 'bitcoin/GET_BITCOIN';
export const GET_BITCOIN_SUCCESS = 'bitcoin/GET_BITCOIN_SUCCESS';
export const GET_BITCOIN_ERROR = 'bitcoin/GET_BITCOIN_ERROR';

export const getBitcoinAsync = createAsyncAction(
    GET_BITCOIN,
    GET_BITCOIN_SUCCESS,
    GET_BITCOIN_ERROR
)<string, BitcoinCandles, AxiosError>();

