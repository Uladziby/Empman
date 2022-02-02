import { MainPage } from "Pages/MainPage";
import { AuthPage } from "Pages/AuthPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./constants";
import { useSelector } from "react-redux";
import { IStore } from "./interfaces";
import { DetailPage } from "Pages/DetailPage";
import { useEffect } from "react";

export const useRoutes = () => {
  const isAuth = useSelector((state: IStore) => state.start.isLogin);

  if (isAuth) {
    return (
      <Switch>
        <Route path={Routes.auth} exact>
          <AuthPage />
        </Route>
        <Route path={Routes.main} exact>
          <MainPage />
        </Route>
        <Route path={`${Routes.detail}/:id`} component={DetailPage} />
        <Redirect to={Routes.auth} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={Routes.auth} exact>
        <AuthPage />
      </Route>
      <Redirect from={Routes.main} to={Routes.auth} />
    </Switch>
  );
};
