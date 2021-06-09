import {combineReducers} from 'redux';
import dailynews from './news';
import {newsSaga} from './news';
import dailystocks from './krstocks';
import {krstocksSaga} from './krstocks';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    dailystocks,
    dailynews
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([newsSaga()]);
}