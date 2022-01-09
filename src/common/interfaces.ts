import { Constants } from "./constants";
export interface IStore {
  start: IStartPage;
}

export interface IStartPage {
  TypeLogon: Constants.SHOW_LOGIN | Constants.SHOW_SIGNUP;
  user: IUserData[];
  isLogin : boolean;
}
export interface IDataLogIn {
  email: string;
  password: string;
}

export interface IUserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
