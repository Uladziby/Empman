import { MainPage } from "Pages/MainPage";
import { AuthPage } from "Pages/AuthPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Routes } from "./constants";
import { useSelector } from "react-redux";
import { IStore } from "./interfaces";
import { useEffect } from "react";

export const useRoutes = () => {
  const isAuth = useSelector((state: IStore) => state.start.isLogin);
  const history = useHistory();
  
  function initLocation (){
    history.push("/")

  }

  if (isAuth) {
    return (
      <Switch>
        <Route path={Routes.main} exact>
          <MainPage />
        </Route>
        <Redirect to={Routes.auth} />
      </Switch>
    );
  }
  
  return (
    <Switch>
      
      <Route path={Routes.auth} exact>
        <AuthPage />
      </Route>
      <Redirect to={Routes.auth} />
    </Switch>
  );
};
