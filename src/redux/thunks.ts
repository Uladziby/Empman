import { IEmployee, IUserData } from "common/interfaces";
import { IDataLogIn } from "./../common/interfaces";
import { AxiosResponse } from "axios";
import {
  checkLogIn,
  createEmp,
  createNewUser,
  deleteEmp,
  getAllEmployees,
  getAllUsers,
  getDataEmp,
  Logout,
  updateDetailEmp,
} from "common/api";
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

export const getDetailEmp = (id: string) => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<any> }) => void) => {
    getDataEmp(id).then((user) => {
      setTimeout(() => {
        dispatch({
          type: Actions.GET_DETAIL_EMP,
          payload: user!.data,
        });
      }, 2000);
    });
  };
};
/*из компоненты  вызываем GetUser => 
GetAllUser запрашивает на сервере данные
 => эти данные диспатчим через наш редюсер в стор
*/

//warnings при если пользователь не существует
//предыдущее значение показывает

export const checkLogInThunks = (data: IDataLogIn) => {
  return (dispatch: any) => {
    checkLogIn(data)
      .then((res) => {
        setTimeout(() => { 
          console.log(res)
          if (res?.status === 400) {
            alert("user not exist");
          }
            dispatch({
              type: Actions.SET_CURRENT_USER,
              payload: res!.data,
            });
          
        }, 2000);
      })
      .then(() => {
        dispatch({
          type: Actions.IS_LOGIN,
          payload: true,
        });
      });
  };
};

export const logoutThunks = (data: boolean) => {
  return (dispatch: any) => {
    Logout(data).then((res) => {
      console.log(res)
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

export const updateDetailEmpThunks = (data: IEmployee, id: string) => {
  return (dispatch: (arg0: { type: string; payload: AxiosResponse<IEmployee> }) => void) => {
    updateDetailEmp(data, id)
      .then((res) => {
        console.log(res?.status, res?.data);
        dispatch({
          type: Actions.UPDATE_EMP,
          payload: res?.data,
        });
      })
      .catch((error) => console.log(error, "not create"));
  };
};

//Register new user

export const createNewUserThunks = (data: IUserData) => {
  return () => {
    createNewUser(data)
      .then((res) => {
        /*    dispatch({
          type: Actions.CREATE_NEW_USER,
          payload: res?.data,
        }); */
      })
      .catch((error) => console.log(error, "not create"));
  };
};
