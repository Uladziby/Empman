import { Constants } from './constants';
export interface IStore{
    startPage : IStartPage,
}

export interface IStartPage {
    TypeLogon : Constants.SHOW_LOGIN | Constants.SHOW_SIGNUP,
}
