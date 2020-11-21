import { RECEIVE_LOANS, RECEIVE_LOAN } from '../actions/loan_actions';

const loansReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_LOANS:
            return action.loans;
        case RECEIVE_LOAN:
            newState[action.loan.id] = action.loan;
            return newState;
        default:
            return state;
    }
};

export default loansReducer;