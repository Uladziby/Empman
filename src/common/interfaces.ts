import { Constants } from "./constants";

export interface IStore {
  start: IStartPage;
  main: IMainPage;
  detail: IDetailPage;
  isLoading: boolean;
}

export interface IStartPage {
  TypeLogon: Constants.SHOW_LOGIN | Constants.SHOW_SIGNUP;
  user: IDataLogIn;
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
  isAdmin : boolean;
}

export interface IEmployee{
  id: string;
  photo: string;
  firstName : string;
  lastName : string;
  location : string;
  age: number;
  dateFrom: string;
  email: string;
  phone : string;
  freeDays : number;
  position : string;
  level: 'junior'|'middle'|'senior';
  skills : string[];
}

export interface IMainPage {
  Employees: IEmployee[];
  deleteEmp: string;
}

export interface IDetailPage {
  employee: IEmployee;
}
