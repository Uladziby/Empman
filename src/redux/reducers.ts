import { ReducerStart } from './actions';
import { combineReducers } from "redux";
import { ReducerLoader } from './ReducerLoader';
import { ReducerMain } from './ReducerMain';
import { ReducerDetail } from './ReducerDetail';

export const rootReducer =  combineReducers({
    start : ReducerStart,
    main : ReducerMain,
    isLoading : ReducerLoader,
    detail : ReducerDetail,
})

export type RootState = ReturnType<typeof rootReducer>;