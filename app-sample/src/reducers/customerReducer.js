import { types } from "../types/types";

const initialState = {
    customers: []
}

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.customerGet:
            return {
                ...state,
                customers: [...action.payload]
            }
        case types.customerCreate:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case types.customerUpdate:
            return {
                ...state,
                customers: state.customers.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        case types.customerDelete:
            return {
                ...state,
                customers: state.customers.filter(
                    e => (e.id !== action.payload.id)
                )
            }
        default:
            return state;
    }
}