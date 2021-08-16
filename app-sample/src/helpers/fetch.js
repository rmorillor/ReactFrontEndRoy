const baseURL = process.env.REACT_APP_AUTH_API_URL;
const baseCRUDURL = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            }
        });
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

const fetchConToken = (endpoint, rToken, method = 'GET') => {

    const token = localStorage.getItem('x2XP7gFna8E9hNWzhTgq') || '';

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(rToken)
        });
    }
}

const fetchSinData = (endpoint, method = 'GET') => {

    const url = `${baseCRUDURL}/${endpoint}`;

    const token = localStorage.getItem('x2XP7gFna8E9hNWzhTgq') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
    }
}

const fetchCRUDToken = (endpoint, data, method = 'GET') => {

    const url = `${baseCRUDURL}/${endpoint}`;

    const token = localStorage.getItem('x2XP7gFna8E9hNWzhTgq') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
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