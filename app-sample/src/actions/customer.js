import Swal from "sweetalert2";
import { fetchCRUDToken, fetchSinData } from "../helpers/fetch";
import { types } from "../types/types";

export const startGettingCustomers = (setState) => {
    return async (dispatch) => {

        const resp = await fetchSinData('Customer/GetCustomers');
        const body = await resp.json();

        if (body.status === "200") {

            setState(body.data);
            dispatch(getCustomers(body.data));

        } else {
            Swal.fire('Info', body.message, 'info');
        }
    }
};

const getCustomers = (cust) => ({
    type: types.customerGet,
    payload: cust
});

export const startCreatingCustomer = (oldData, setState, newData, user) => {
    return async (dispatch) => {

        const resp = await fetchCRUDToken(`Customer/CreateCustomer/${user}`, newData, 'POST');
        const body = await resp.json();

        try {
            if (body.status === "201") {

                dispatch(createCustomer(body.data[0]));

                setState([...oldData, body.data[0]]);

            } else {
                Swal.fire('Error', body.message, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error inserting customer', 'error');
        }

    }
};

const createCustomer = (cust) => ({
    type: types.customerCreate,
    payload: cust
});

export const startUpdatingCustomer = (oldData, setState, newData, user) => {
    return async (dispatch) => {

        const resp = await fetchCRUDToken(`Customer/UpdateCustomer/${user}`, newData, 'PUT');
        const body = await resp.json();

        try {
            if (body.status === "204") {

                dispatch(updateCustomer(body.data[0]));

                const info = oldData.map(e => (e.id === body.data[0].id) ? body.data[0] : e);

                setState(info);

            } else {
                Swal.fire('Error', body.message, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error inserting customer', 'error');
        }

    }
};

const updateCustomer = (cust) => ({
    type: types.customerUpdate,
    payload: cust
});

export const startDeletingCustomer = (oldData, setState, newData, user) => {
    return async (dispatch) => {

        const resp = await fetchCRUDToken(`Customer/DeleteCustomer/${newData.id}/?user=${user}`, newData, 'DELETE');
        const body = await resp.json();

        try {
            if (body.status === "204") {

                dispatch(deleteCustomer(body.data[0]));

                const info = oldData.filter(e => (e.id !== body.data[0].id));

                setState(info);

            } else {
                Swal.fire('Error', body.message, 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Error inserting customer', 'error');
        }

    }
};

const deleteCustomer = (cust) => ({
    type: types.customerDelete,
    payload: cust
});