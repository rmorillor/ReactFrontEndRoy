import { types } from "../types/types";

const initialState = {
    created: '',
    email: '',
    firstName: '',
    id: '',
    isVerified: false,
    jwtToken: '',
    lastName: '',
    role: '',
    title: '',
    refreshToken: '',
    checking: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authLogout:
            return {
                checking: false
            }

        default:
            return state;
    }
}