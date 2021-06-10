import {combineReducers} from 'redux';
import dailynews from './news';
import {newsSaga} from './news';
import dailykrstocks from './krstocks';
import dailyusstocks from './usstocks';
import {krstocksSaga} from './krstocks';
import {usstocksSaga} from './usstocks';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    dailykrstocks,
    dailyusstocks,
    dailynews
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([newsSaga(), krstocksSaga(), usstocksSaga()]);
}