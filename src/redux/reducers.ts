import { ReducerStart } from './actions';
import { combineReducers } from "redux";
import { ReducerLoader } from './ReducerLoader';
import { ReducerMain } from './ReducerMain';

export const rootReducer =  combineReducers({
    start : ReducerStart,
    main : ReducerMain,
    isLoading : ReducerLoader,
})

export type RootState = ReturnType<typeof rootReducer>;