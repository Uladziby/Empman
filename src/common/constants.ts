import { IUserData } from "common/interfaces";
export enum Constants {
  SHOW_LOGIN = "SHOW_LOGIN",
  SHOW_SIGNUP = "SHOW_SIGNUP",
}

export enum Routes {
  auth = "/",
  main = "/main",
  detail = "/detail",
}
export enum PositionsEnum {
  junior = "junior",
  middle = "middle",
  senior = "senior",
}
export enum AsideLinkEnum {
  MyTeam = "/main",
  Detail = "/detail",
}

export enum Actions {
  CHANGE_LOGON_TYPE = "CHANGE_LOGON_TYPE",
  CREATE_NEW_USER = "CREATE_NEW_USER",
  ENTER_USER = "ENTER_USER",
  GET_USERS = "GET_USERS",
  IS_LOGIN = "IS_LOGIN",
  LOADING = "LOADING",
  GET_ALL_EMP = "GET_ALL_EMP",
  CREATE_EMP = "CREATE_EMP",
  DEL_EMP = "DEL_EMP",
  LOG_OUT = "LOG_OUT",
  GET_DETAIL_EMP = "GET_DETAIL_EMP",
  UPDATE_EMP = "UPDATE_EMP",
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export const emptyUser: IUserData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAdmin: false,
};
