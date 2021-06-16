import {createAsyncAction} from 'typesafe-actions';
import {AxiosError} from 'axios';
import { USStocks } from '../../api/usstocks';

export const GET_USSTOCK = 'USstocks/GET_USSTOCK';
export const GET_USSTOCK_SUCCESS = 'USstocks/GET_USSTOCK_SUCCESS';
export const GET_USSTOCK_ERROR = 'USstocks/GET_USSTOCK_ERROR';

export const getUSStockAsync = createAsyncAction(
    GET_USSTOCK,
    GET_USSTOCK_SUCCESS,
    GET_USSTOCK_ERROR
)<string, USStocks, AxiosError>();