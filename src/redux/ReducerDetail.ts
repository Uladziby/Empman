import { Actions } from "common/constants";
import { IDetailPage, IEmployee } from "common/interfaces";

const emptyUser: IEmployee = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  dataFrom: "",
  position: "",
  freeDays: 0,
  phone: "",
  skills: [],
};

export type TypeDetailEmp = {
  type: typeof Actions.GET_DETAIL_EMP;
  payload: IEmployee;
};

//Actions

export const ActionGetDetailEmp = (data: IEmployee): TypeDetailEmp => ({
  type: Actions.GET_DETAIL_EMP,
  payload: data,
});

//InitialState
export const initialStateMainPage: IDetailPage = {
  employee: emptyUser,
};

export type TypesDetailPage = TypeDetailEmp;

export const ReducerDetail = (state: IDetailPage = initialStateMainPage, action: TypesDetailPage) => {
  switch (action.type) {
    case Actions.GET_DETAIL_EMP: {
      return { ...state, employee: action.payload };
    }
    default:
      return state;
  }
};
