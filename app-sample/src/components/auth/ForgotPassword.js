import React from 'react';
import { useDispatch } from 'react-redux';
import { startForgotPassword } from '../../actions/auth';
import { useForm } from '../../customHooks/useForm';
import { Link } from 'react-router-dom';

export const ForgotPassword = ({ history }) => {


    const dispatch = useDispatch();

    const [formforgotValues, handleForgotInputChange] = useForm({ Email: '' });

    const { Email } = formforgotValues;

    const handleForgot = (e) => {
        e.preventDefault();

        dispatch(startForgotPassword(Email));
        history.push('/auth/login');
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-1">
                    <h3>Forgot Password</h3>
                    <form onSubmit={handleForgot}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your E-Mail"
                                name="Email"
                                value={Email}
                                onChange={handleForgotInputChange}
                            />
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <div className="form-group mt-3">
                                    <input
                                        type="submit"
                                        className="btnSubmit"
                                        value="Forgot Passsword"
                                    />
                                </div>
                            </div>
                            <div className="col-2 d-flex flex-row-reverse">
                                <div className="col-sm-3 text_align_right mt-3 mr-4">
                                    <Link className="link" to="/auth/login">
                                        <span className="text_blue">Login</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
