import { IEmployee } from "common/interfaces";
import { IDataLogIn } from "./../common/interfaces";
import { AxiosResponse } from "axios";
import { checkLogIn, createEmp, deleteEmp, getAllEmployees, getAllUsers, getDataEmp, Logout } from "common/api";
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

export const getDetailEmp = (id:string) => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<any> }) => void) => {
    getDataEmp(id).then((user) => {
      dispatch({
        type: Actions.GET_DETAIL_EMP,
        payload: user!.data,
      });
    });
  };
};
/*из компоненты  вызываем GetUser => 
GetAllUser запрашивает на сервере данные
 => эти данные диспатчим через наш редюсер в стор
*/

//warnings при если пользователь не существует

export const checkLogInThunks = (data: IDataLogIn) => {
  return (dispatch: any) => {
    checkLogIn(data).then((res) => {
      setTimeout(() => {
        dispatch({
          type: Actions.IS_LOGIN,
          payload: res!.data,
        });
      }, 2000);
    });
  };
};
export const logoutThunks = (data: boolean) => {
  return (dispatch: any) => {
    Logout(data).then((res) => {
      dispatch({
        type: Actions.LOG_OUT,
        payload: res!.data,
      });
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
    deleteEmp(id)
      .then((res) => {
        dispatch({
          type: Actions.DEL_EMP,
          payload: res?.data,
        });
      })
      .catch((error) => console.log(error, "delete not complete"));
  };
};

export const createNewEmployeeThunks = () => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<IEmployee> }) => void) => {
    createEmp()
      .then((res) => {
        dispatch({
          type: Actions.CREATE_EMP,
          payload: res?.data,
        });
      })
      .catch((error) => console.log(error, "not create"));
  };
};
