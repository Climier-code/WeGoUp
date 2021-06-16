import {createAsyncAction} from 'typesafe-actions';
import {AxiosError} from 'axios';
import { News } from '../../api/news';

export const GET_NEWS = 'news/GET_NEWS';
export const GET_NEWS_SUCCESS = 'news/GET_NEWS_SUCCESS';
export const GET_NEWS_ERROR = 'news/GET_NEWS_ERROR';

export const getNewsAsync = createAsyncAction(
    GET_NEWS,
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR
)<string, News, AxiosError>();

