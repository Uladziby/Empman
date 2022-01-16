import { IEmployee } from 'common/interfaces';
import { IDataLogIn } from "./../common/interfaces";
import { AxiosResponse } from "axios";
import { checkLogIn, deleteEmp, getAllEmployees, getAllUsers } from "common/api";
import { Actions } from "common/constants";

export const getUsers = () => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<any> }) => void) => {
    getAllUsers().then((users) => {
      dispatch({
        type: Actions.GET_USERS,
        payload: users.data,
      });
    });
  };
};

/*из компоненты  вызываем GetUser => 
GetAllUser запрашивает на сервере данные
 => эти данные диспатчим через наш редюсер в стор
*/

export const checkLogInThunks = (data: IDataLogIn) => {
  return (dispatch: any) => {
    checkLogIn(data).then((answ) => {
      setTimeout(() => {
        dispatch({
          type: Actions.IS_LOGIN,
          payload: answ!.data,
        });
      }, 2000);
    });
  };
};

export const getAllEmpThunks = () => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<any> }) => void) => {
    getAllEmployees().then((users) => {
      dispatch({
        type: Actions.GET_ALL_EMP,
        payload: users.data,
      });
    });
  };
};

export const deleteEmpThunks = (id: string) => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<IEmployee[]> }) => void) => {
    deleteEmp(id).then((res)=>{
      dispatch({
        type: Actions.DEL_EMP,
        payload : res?.data,
      })
    })
  };
};
//