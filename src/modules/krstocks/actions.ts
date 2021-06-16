import {createAsyncAction} from 'typesafe-actions';
import {AxiosError} from 'axios';
import { KRStocks } from '../../api/krstocks';

export const GET_KRSTOCK = 'krstocks/GET_KRSTOCK';
export const GET_KRSTOCK_SUCCESS = 'krstocks/GET_KRSTOCK_SUCCESS';
export const GET_KRSTOCK_ERROR = 'krstocks/GET_KRSTOCK_ERROR';

export const getKRStockAsync = createAsyncAction(
    GET_KRSTOCK,
    GET_KRSTOCK_SUCCESS,
    GET_KRSTOCK_ERROR
)<string, KRStocks, AxiosError>();