import React from 'react';
import { AppRouter } from './Routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const AppSample = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>

            {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
    )
}
