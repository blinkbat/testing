


// CONDENSED SYNTAX
// boilerplate for middleware functions.
export default ({ dispatch }) => next => action => {

    // check if action has Promise as payload.
    // if so, wait for resolution.
    // else, send it along to next middleware.
    if( !action.payload || !action.payload.then ) {

        // banish actions we DGAF about.
        return next( action );
    }

    // wait for Promise to resolve, create a new action 
    // with its data, and then dispatch it.
    action.payload.then( function( response ) {

        // spread action to newAction, and then
        // add on a new response payload.
        const newAction = { ...action, payload: response };

        // send newAction through middlewares again
        dispatch( newAction );

    });
    

};


// EXPANDED SYNTAX FOR BOILERPLATE
// export default function({ dispatch }) {

//     // if this middleware doesn't care about this action,
//     // send it to the next middleware in the chain.
//     return function( next ) {

//         // else, let's consume the action.
//         return function( action ) {

//         }
//     }
// }


