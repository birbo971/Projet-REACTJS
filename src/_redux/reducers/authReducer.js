// authReducer.js

import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from './isEmpty';

const initialState = {
    isAuthenticated: localStorage.getItem('jwtToken'),
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: localStorage.getItem('jwtToken'),
                user: action.payload
            }
        default: 
            return state;
    }
}