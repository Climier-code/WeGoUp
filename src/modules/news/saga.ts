import {getNewsAsync, GET_NEWS} from './actions';
import {getNews, News} from '../../api/news';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getNewsSaga(action:ReturnType<typeof getNewsAsync.request>) {
    try {
        const news:News = yield call(getNews, action.payload);
        yield put(getNewsAsync.success(news));
    } catch(e) {
        yield put(getNewsAsync.failure(e));
    }
}

export function* newsSaga() {
    yield takeEvery(GET_NEWS, getNewsSaga);
}