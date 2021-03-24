import * as APIUtil from '../util/lender_api_util';

export const RECEIVE_ALL_LENDING_TRANSACTIONS = 'RECEIVE_ALL_LENDING_TRANSACTIONS';
export const RECEIVE_LENDING_TRANSACTION = 'RECEIVE_LENDING_TRANSACTION';

const receiveAllLendingTransactions = (lendingTransactions) => {
    return {
        type: RECEIVE_ALL_LENDING_TRANSACTIONS,
        lendingTransactions
    }
}

const receiveLendingTransaction = (lendingTransaction) => {
    return {
        type: RECEIVE_LENDING_TRANSACTION,
        lendingTransaction
    }
}

export const fetchAllLendingTransactions = () => (dispatch) => {
    return APIUtil.fetchAllLendingTransactions()
        .then((payload) => dispatch(receiveAllLendingTransactions(payload)));
}

export const fetchLendingTransaction = (lendingTransactionId) => (dispatch) => {
    return APIUtil.fetchLendingTransaction(lendingTransactionId)
        .then((lendingTransactionId) => dispatch(receiveLendingTransaction(lendingTransactionId)));
}

export const createLendingTransaction = (lendingTransaction) => (dispatch) => {
    return APIUtil.createLendingTransaction(lendingTransaction)
        .then((lendingTransaction) => dispatch(receiveLendingTransaction(lendingTransaction)));
}