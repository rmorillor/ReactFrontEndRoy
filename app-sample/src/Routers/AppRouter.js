import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import { startRefreshToken } from '../actions/auth';
import { ForgotPassword } from '../components/auth/ForgotPassword';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ResetPassword } from '../components/auth/ResetPassword';
import { VerificationScreen } from '../components/auth/VerificationScreen';
import { SampleScreen } from '../components/sample/SampleScreen';
import { Loading } from '../components/ui/Loading';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking, id } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startRefreshToken());
    }, [dispatch])

    if (checking) {
        return (<Loading />);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute exact path="/auth/login" component={LoginScreen} isAuthenticated={!!id} />
                    <PublicRoute exact path="/auth/register" component={RegisterScreen} isAuthenticated={!!id} />
                    <PublicRoute exact path="/auth/verify/:verificationToken" component={VerificationScreen} isAuthenticated={!!id} />
                    <PublicRoute exact path="/auth/forgot-password" component={ForgotPassword} isAuthenticated={!!id} />
                    <PublicRoute exact path="/auth/reset-password/:resetToken" component={ResetPassword} isAuthenticated={!!id} />
                    <PrivateRoute exact path="/" component={SampleScreen} isAuthenticated={!!id} />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
