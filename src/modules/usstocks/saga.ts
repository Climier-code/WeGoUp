import {getUSStockAsync, GET_USSTOCK} from './actions';
import {getUSStocks, USStocks} from '../../api/usstocks';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getUSStocksSaga(action: ReturnType<typeof getUSStockAsync.request>) {
    try {
        const usstock:USStocks = yield call(getUSStocks, action.payload);
        yield put(getUSStockAsync.success(usstock));
    } catch (e) {
        yield put(getUSStockAsync.failure(e));
    }
}

export function* usstocksSaga() {
    yield takeEvery(GET_USSTOCK, getUSStocksSaga);
}