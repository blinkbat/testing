

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// replacing reduxPromise with our custom middleware
//import reduxPromise from 'redux-promise';
import async from 'middlewares/async';

import reducers from 'reducers';


// here we've destructured props in order to
// set a default initialState that isn't undefined
export default ({ children, initialState = {} }) => {

    const store = createStore( 
        reducers, 
        initialState, 
        // apply our custom middleware
        applyMiddleware( async )
    );

    return(

        <Provider store={ store }>
            { children }
        </Provider>

    );

}