import {getKRStockAsync, GET_KRSTOCK} from './actions';
import {getKRStocks, KRStocks} from '../../api/krstocks';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getKRStocksSaga(action: ReturnType<typeof getKRStockAsync.request>) {
    try {
        const krstock:KRStocks = yield call(getKRStocks, action.payload);
        yield put(getKRStockAsync.success(krstock));
    } catch (e) {
        yield put(getKRStockAsync.failure(e));
    }
}

export function* krstocksSaga() {
    yield takeEvery(GET_KRSTOCK, getKRStocksSaga);
}