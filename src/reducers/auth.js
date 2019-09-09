

import { CHANGE_AUTH } from 'actions/types';

// default state to false for simple boolean auth
export default function( state = false, action ) {

    switch( action.type ) {

        case CHANGE_AUTH:
            return action.payload;

        default:
            return state;

    }

}




