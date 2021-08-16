import React, { useState } from 'react';
import { useForm } from '../../customHooks/useForm';
import { useDispatch } from 'react-redux';
import './login.css';
import { startRegister } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const RegisterScreen = () => {

    const [submited, setSubmited] = useState(false);

    const dispatch = useDispatch();

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: true
    });

    const { title, firstName, lastName, email, password, confirmPassword, acceptTerms } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        setSubmited(true);

        if (password !== confirmPassword) {
            Swal.fire('Error', 'The user or password are not correct.', 'error');
        }

        dispatch(startRegister(title, firstName, lastName, email, password, confirmPassword, acceptTerms));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="title"
                                name="title"
                                value={title}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-Mail"
                                name="email"
                                value={email}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="row">
                            <div className="col-sm-9">
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        disabled={submited}
                                        className="btnSubmit"
                                        value="Create Account" />
                                </div>
                            </div>
                            <div className="col-sm-3 text_align_right">
                                <Link className="link" to="/auth/login">
                                    <span className="text_white">Login</span>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}