

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import reducers from 'reducers';


// here we've destructured props in order to
// set a default initialState that isn't undefined
export default ({ children, initialState = {} }) => {

    const store = createStore( 
        reducers, 
        initialState, 
        applyMiddleware( reduxPromise )
    );

    return(

        <Provider store={ store }>
            { children }
        </Provider>

    );

}