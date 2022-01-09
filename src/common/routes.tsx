import { MainPage } from "Pages/MainPage";
import { AuthPage } from "Pages/AuthPage";
import {Switch, Route, Redirect} from 'react-router-dom';
import { Routes } from "./constants";

export const useRoutes = (isAuthenticated: boolean) =>{
    if (isAuthenticated){
        return (
            <Switch>
                <Route path = {Routes.main} exact>
                    <MainPage/>    
                </Route>
            </Switch>
            
            
        )
    }

    return (
        <Switch>
            <Route path={Routes.auth} exact>
                <AuthPage/>
            </Route>
            <Redirect to={Routes.auth}/>
        </Switch>
    )
}