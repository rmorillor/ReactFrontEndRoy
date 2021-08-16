import React from 'react';
import { useForm } from '../../customHooks/useForm';
import { useDispatch } from 'react-redux';
import './login.css';
import { startLogin } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: '',
        lPassword: ''
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {

        e.preventDefault();

        dispatch(startLogin(lEmail, lPassword));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-1">
                    <h3>Log In</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="E-Mail"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="lPassword"
                                autoComplete="off"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>

                        <Link className="link" to="/auth/register">
                            Create New Account
                        </Link>
                        <br />
                        <Link className="link" to="/auth/forgot-password">
                            Forgot Password?
                        </Link>

                    </form>
                </div>
                <div className="col-md-3"></div>

            </div>
        </div>
    )
}