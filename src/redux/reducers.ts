import { ReducerStart } from './actions';
import { combineReducers } from "redux";

export const rootReducer =  combineReducers({
    start : ReducerStart,
})

export type RootState = ReturnType<typeof rootReducer>;