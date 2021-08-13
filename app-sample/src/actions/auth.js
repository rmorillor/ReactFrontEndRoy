import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import Cookies from 'universal-cookie';
// import { eventLogout } from "./events";

export const startLogin = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('authenticate', { email, password }, 'POST');
        const body = await resp.json();

        const cookies = new Cookies();
        cookies.set('rtoken', body.refreshToken, { path: '/' });
        console.log(cookies.get('rtoken'));

        if (body.isVerified) {

            localStorage.setItem('token', body.jwtToken);
            localStorage.setItem('token-init-date', new Date().getTime());

            localStorage.setItem('rtoken', body.refreshToken);

            dispatch(login({
                created: body.created,
                email: body.email,
                firstName: body.firstName,
                id: body.id,
                isVerified: body.isVerified,
                jwtToken: body.jwtToken,
                lastName: body.lastName,
                role: body.role,
                title: body.title,
                refreshToken: body.refreshToken,
                checking: true
            }))

        } else {
            Swal.fire('Error', body.message, 'error');
        }

    }
};

const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startRegister = (title, firstName, lastName, email, password, confirmPassword, acceptTerms) => {
    return async () => {

        const resp = await fetchSinToken('register', { title, firstName, lastName, email, password, confirmPassword, acceptTerms }, 'POST');
        const body = await resp.json();

        if (body.message) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 5000
            })

        } else {
            Swal.fire('Error', 'There is an error trying to register.', 'error');
        }

    }
}

export const startRefreshToken = () => {
    return async (dispatch) => {

        const rtoken = localStorage.getItem('rtoken');

        const resp = await fetchSinToken('refresh-token', { rtoken }, 'POST');
        const body = await resp.json();

        if (body.isVerified) {

            localStorage.setItem('token', body.jwtToken);
            localStorage.setItem('token-init-date', new Date().getTime());
            localStorage.setItem('rtoken', body.refreshToken);

            dispatch(login({
                created: body.created,
                email: body.email,
                firstName: body.firstName,
                id: body.id,
                isVerified: body.isVerified,
                jwtToken: body.jwtToken,
                lastName: body.lastName,
                role: body.role,
                title: body.title,
                refreshToken: body.refreshToken,
                checking: true
            }))

        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const startForgotPassword = (email) => {
    return async () => {
        const resp = await fetchSinToken('forgot-password', { email }, 'POST');
        const body = await resp.json();

        if (body.message) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 5000
            });

        } else {
            Swal.fire('Error', 'No email exist.', 'error');
        }
    }
}

export const startResetPassword = (password, confirmPassword, token) => {
    return async () => {
        const resp = await fetchSinToken('reset-password', { password, confirmPassword, token }, 'POST');
        const body = await resp.json();

        if (body.message) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 3000
            });

        } else {
            Swal.fire('Error', 'Error reseting password.', 'error');
        }
    }
}

export const startVerifyToken = (Token) => {
    return async () => {

        const resp = await fetchSinToken('verify-email', { Token }, 'POST');
        const body = await resp.json();

        if (body.message !== 'Verification failed') {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: body.message,
                showConfirmButton: false,
                timer: 3000
            });

        } else {
            Swal.fire('Error', 'No email is verified', 'error');
        }

    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();

        dispatch(logout());
        // dispatch(eventLogout());
    }
}

const logout = () => ({
    type: types.authLogout
});