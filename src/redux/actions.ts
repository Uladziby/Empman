import { IUserData } from "./../common/interfaces";
import { Actions, Constants } from "./../common/constants";

import { IStartPage } from "common/interfaces";


//TYPES
export type TypeLogonType = {
  type: typeof Actions.CHANGE_LOGON_TYPE;
  payload: string;
};
export type TypeCreateNewUser = {
  type: typeof Actions.CREATE_NEW_USER;
  payload: IUserData[];
};
export type TypeEnterUser = {
  type: typeof Actions.ENTER_USER;
  payload: IUserData[];
};

export type TypeGetUsers ={
  type : typeof Actions.GET_USERS,
  payload : IUserData[];
}
export type TypeIsLogin ={
  type : typeof Actions.IS_LOGIN,
  payload : boolean,
}
export type TypeLogOut ={
  type : typeof Actions.LOG_OUT,
  payload : boolean,
}
//ACTIONS

export const ActionGetUsers = (data: IUserData[]): TypeGetUsers => ({
  type : Actions.GET_USERS,
  payload : data,
})

export const ActionChangeLogonType = (data: string): TypeLogonType => ({
  type: Actions.CHANGE_LOGON_TYPE,
  payload: data,
});
export const ActionCreateNewUser = (data: IUserData[]): TypeCreateNewUser => ({
  type: Actions.CREATE_NEW_USER,
  payload: data,
});

export const ActionIsLogin = (data : boolean): TypeIsLogin =>({
  type : Actions.IS_LOGIN,
  payload : data,
})
export const ActionLogout = (data : boolean): TypeLogOut =>({
  type : Actions.LOG_OUT,
  payload : data,
})
/* 
 write dispatch => new constant =>create new Type => 
 create Action(func in reducer) =>
 update initialState=>

 create  Reducer => import all from actions to reducer=>
 create initialState => add Reducer to RootReducer
 */
export const initialStateStartPage: IStartPage = {
  TypeLogon: Constants.SHOW_LOGIN,
  user: [],
  isLogin: false,
};

export type TypesStartPage = TypeCreateNewUser | TypeLogonType| TypeGetUsers | TypeIsLogin | TypeLogOut ;

export const ReducerStart = (state: IStartPage = initialStateStartPage, action: TypesStartPage) => {
  switch (action.type) {
    case Actions.CHANGE_LOGON_TYPE: {
      return { ...state, TypeLogon: action.payload };
    }
    case Actions.CREATE_NEW_USER: {
      return { ...state, user: action.payload };
    }
    case Actions.GET_USERS: {
      return { ...state, user: action.payload };
    }
    case Actions.IS_LOGIN : {
      return {...state, isLogin : action.payload}
    }
    case Actions.LOG_OUT : {
      return {...state, isLogin : false}
    }
    default:
      return state;
  }
};
