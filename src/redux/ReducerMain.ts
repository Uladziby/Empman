import { ReducerStart } from "./actions";
import { IEmployee, IMainPage } from "./../common/interfaces";
import { getAllEmployees } from "common/api";
import { Actions } from "common/constants";

//types
export type TypeAllEmp = {
  type: typeof Actions.GET_ALL_EMP;
  payload: IEmployee[];
};

export type TypeDelEmp = {
  type: typeof Actions.DEL_EMP;
  payload: string;
};
export type TypeCreateEmp = {
  type: typeof Actions.CREATE_EMP;
  payload: IEmployee;
};

//Actions

export const ActionGetUsers = (data: IEmployee[]): TypeAllEmp => ({
  type: Actions.GET_ALL_EMP,
  payload: data,
});

export const ActionDelEmp = (data: string): TypeDelEmp => ({
  type: Actions.DEL_EMP,
  payload: data,
});

export const ActionCreateEmp = (data: IEmployee): TypeCreateEmp => ({
  type: Actions.CREATE_EMP,
  payload: data,
});
//InitialState
export const initialStateMainPage: IMainPage = {
  Employees: [],
  deleteEmp: "",
};

export type TypesMainPage = TypeAllEmp | TypeDelEmp | TypeCreateEmp;

//Reducer
export const ReducerMain = (state: IMainPage = initialStateMainPage, action: TypesMainPage) => {
  switch (action.type) {
    case Actions.GET_ALL_EMP: {
      return { ...state, Employees: action.payload };
    }
    case Actions.DEL_EMP: {
      return { ...state, Employees: filterDelId(action.payload, state) };
    }
    case Actions.CREATE_EMP: {
      return { ...state, Employees: [...state.Employees , action.payload] };
    }
    default:
      return state;
  }
};

function filterDelId(id: string, state: IMainPage) {
  return state.Employees.filter((item) => item.id !== id);
}
