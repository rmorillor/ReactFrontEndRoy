const baseURL = process.env.REACT_APP_AUTH_API_URL;
const baseCRUDURL = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchSinData = (endpoint, method = 'GET') => {

    const url = `${baseCRUDURL}/${endpoint}`;

    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            }
        });
    }
}

const fetchCRUDToken = (endpoint, data, method = 'GET') => {

    const url = `${baseCRUDURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
}

export {
    fetchSinToken,
    fetchConToken,
    fetchSinData,
    fetchCRUDToken
}