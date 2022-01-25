import { Constants } from "./constants";

export interface IStore {
  start: IStartPage;
  main: IMainPage;
  detail: IDetailPage;
  isLoading: boolean;
}

export interface IStartPage {
  TypeLogon: Constants.SHOW_LOGIN | Constants.SHOW_SIGNUP;
  user: IUserData[];
  isLogin: boolean;
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
export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  dataFrom: string;
  position: string;
  freeDays: number;
  phone: string;
  skills: string[];
}

export interface IMainPage {
  Employees: IEmployee[];
  deleteEmp: string;
}

export interface IDetailPage {
  employee: IEmployee;
}
