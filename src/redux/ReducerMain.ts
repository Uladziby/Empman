import { ReducerStart } from "./actions";
import { IEmployee, IMainPage } from "./../common/interfaces";
import { getAllEmployees } from "common/api";
import { Actions } from "common/constants";

export type TypeAllEmp = {
  type: typeof Actions.GET_ALL_EMP;
  payload: IEmployee[];
};

export type TypeDelEmp = {
  type: typeof Actions.DEL_EMP;
  payload: IEmployee[];
};

export const ActionGetUsers = (data: IEmployee[]): TypeAllEmp => ({
  type: Actions.GET_ALL_EMP,
  payload: data,
});
export const ActionDelEmp = (data: IEmployee[]): TypeDelEmp => ({
  type: Actions.DEL_EMP,
  payload: data,
});
export const initialStateMainPage: IMainPage = {
  Employees: [],
  deleteEmp : '',
};

export type TypesMainPage = TypeAllEmp |TypeDelEmp;

export const ReducerMain = (state: IMainPage = initialStateMainPage, action: TypesMainPage) => {
  switch (action.type) {
    case Actions.GET_ALL_EMP: {
      return { ...state, Employees: action.payload };
    }
    case Actions.DEL_EMP:{
      return {...state, Employees: action.payload}
    }
    default:
      return state;
  }
};


//отобразить учатснико и и справить проблемы  индексом