import { IDataLogIn } from "./../common/interfaces";
import { AxiosResponse } from "axios";
import { checkLogIn, getAllUsers } from "common/api";
import { Actions } from "./actions";

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
      dispatch({
        type: Actions.IS_LOGIN,
        payload: answ!.data,
      });
    });
  };
};
