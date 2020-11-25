import { RECEIVE_LOAN } from '../actions/loan_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_LOAN:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;