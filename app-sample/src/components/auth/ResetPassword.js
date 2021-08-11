import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from '../../customHooks/useForm';
import Swal from 'sweetalert2';
import { startResetPassword } from '../../actions/auth';

export const ResetPassword = ({ history }) => {

    const { resetToken } = useParams();
    const dispatch = useDispatch();

    const [formResetValues, handleResetInputChange] = useForm({
        password: '',
        confirmPassword: ''
    });

    const { password, confirmPassword } = formResetValues;

    const handleReset = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire('Error', 'The user or password are not correct.', 'error');
        }

        dispatch(startResetPassword(password, confirmPassword, resetToken));
        history.push('/auth/login');

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-1">
                    <form onSubmit={handleReset}>
                        <h3>Reset Password</h3>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleResetInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleResetInputChange}
                            />
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Reset Password" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
