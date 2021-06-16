import {createReducer} from 'typesafe-actions';
import {NewsState, NewsAction} from './types';
import {GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_ERROR} from './actions';

const initialState: NewsState = {
    newsContent: {
        loading: false,
        error: null,
        data: null,
    }
};

const dailynews = createReducer<NewsState, NewsAction>(initialState, {
    [GET_NEWS]: state => ({
        ...state,
        newsContent: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_NEWS_SUCCESS]: (state, action) => ({
        ...state,
        newsContent: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_NEWS_ERROR]: (state, action) => ({
        ...state,
        newsContent: {
            loading:false,
            error: action.payload,
            data:null
        }
    })
});

export default dailynews;