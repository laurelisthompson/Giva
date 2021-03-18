import {
    RECEIVE_ALL_LENDING_TRANSACTIONS,
    RECEIVE_LENDING_TRANSACTION
} from '../actions/lender_actions';

const lendingTransactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_LENDING_TRANSACTIONS:
            return action.lendingTransactions;
        case RECEIVE_LENDING_TRANSACTION:
            newState[action.lendingTransaction.id] = action.lendingTransaction;
            return newState;

        default:
            return oldState;
    }
}

export default lendingTransactionsReducer;