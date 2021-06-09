import {combineReducers} from 'redux';
import news from './news';
import {newsSaga} from './news';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    news
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([newsSaga()]);
}