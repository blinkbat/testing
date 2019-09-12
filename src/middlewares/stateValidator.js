


import tv4 from 'tv4';

// absolute or relative path?
import stateSchema from 'middlewares/stateSchema'



// getState will return all redux store data
export default ({ dispatch, getState }) => next => action => {

    // first, just hit next.
    next( action );

    // validate state with schema
    const validationBool = tv4.validate( getState(), stateSchema );

    // if false...
    if( !validationBool ) {

        console.error( "stateValidator: invalid state detected.", getState() );

    } else {

        console.log( "stateValidator: state modified successfully." );

    }

}   