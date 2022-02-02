import { Actions } from "common/constants";

export const ReducerLoader = (state: boolean = false, action: TypeLoader) => {
  switch (action.type) {
    case Actions.LOADING: {
      return action.payload;
    }
    default:
      return state;
  }
};

export type TypeLoader = {
  type: typeof Actions.LOADING;
  payload: boolean;
};

export const ActionLoader = (data: boolean): TypeLoader => ({
  type: Actions.LOADING,
  payload: data,
});
