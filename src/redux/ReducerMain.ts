import { ReducerStart } from "./actions";
import { IEmployee, IMainPage } from "./../common/interfaces";
import { getAllEmployees } from "common/api";
import { Actions } from "common/constants";

export type TypeAllEmp = {
  type: typeof Actions.GET_ALL_EMP;
  payload: IEmployee[];
};

export const ActionGetUsers = (data: IEmployee[]): TypeAllEmp => ({
  type: Actions.GET_ALL_EMP,
  payload: data,
});

export const initialStateMainPage: IMainPage = {
  Employees: [],
};

export type TypesMainPage = TypeAllEmp;

export const ReducerMain = (state: IMainPage = initialStateMainPage, action: TypesMainPage) => {
  switch (action.type) {
    case Actions.GET_ALL_EMP: {
        console.log(action.payload)
      return { ...state, Employees: action.payload };
    }
    default:
      return state;
  }
};


//отобразить учатснико и и справить проблемы  индексом