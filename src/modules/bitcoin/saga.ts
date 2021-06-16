import { getBitcoinAsync, GET_BITCOIN } from './actions';
import { getBitCandle, BitcoinCandles } from '../../api/bitcoin';
import { call, put, takeEvery } from '@redux-saga/core/effects';

function* getBitcoinSaga(action:ReturnType<typeof getBitcoinAsync.request>) {
    try {
        const bitcandle:BitcoinCandles = yield call(getBitCandle, action.payload);
        yield put(getBitcoinAsync.success(bitcandle));
    } catch (e) {
        yield put(getBitcoinAsync.failure(e));
    }
}

export function* bitcoinSaga() {
    yield takeEvery(GET_BITCOIN, getBitcoinSaga);
}