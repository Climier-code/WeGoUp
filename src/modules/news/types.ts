import * as actions from './actions';
import {ActionType} from 'typesafe-actions';
import {News} from '../../api/news';

export type NewsAction = ActionType<typeof actions>;

export type NewsState = {
    newsContent: {
        loading: boolean;
        error: Error | null;
        data: News | null;
    };
};
