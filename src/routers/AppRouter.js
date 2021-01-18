import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component= { LoginScreen } isAuthenticated= {user.logged}/>
                    <PrivateRoute path='/' component={ DashboardRoutes } isAuthenticated= {user.logged}/>
                </Switch>
            </div>
        </Router>
    )
}
