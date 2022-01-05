import { Constants } from "./../common/constants";

import { IStartPage } from "common/interfaces";

export enum Actions {
  CHANGE_LOGON_TYPE = "CHANGE_LOGON_TYPE",
}

export type ActionLogonType = {
  type: typeof Actions.CHANGE_LOGON_TYPE;
  payload: string;
};

export const changeLogonType = (data: string): ActionLogonType => ({
  type: Actions.CHANGE_LOGON_TYPE,
  payload: data,
});

// write dispatch => create Action(func in reducer) => create  Reducer => import all from actions to reducer=>
// create initialState => add Reducer to RootReducer

export const initialStateStartPage: IStartPage = {
  TypeLogon: Constants.SHOW_LOGIN,
};

export const ReducerStart = (state: IStartPage = initialStateStartPage, action: ActionLogonType) => {
  switch (action.type) {
    case Actions.CHANGE_LOGON_TYPE: {
      return { ...state, TypeLogon: action.payload };
    }
    default:
      return state;
  }
};
