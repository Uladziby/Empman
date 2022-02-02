import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
