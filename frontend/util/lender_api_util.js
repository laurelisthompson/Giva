// import { $CombinedState } from "redux"

export const fetchAllLendingTransactions = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/lenders'
    })
};

export const createLendingTransaction = (lendingTransaction) => {
    return $.ajax({
        method: 'POST',
        url: 'api/lenders',
        data: { lendingTransaction: lendingTransaction }
    })
};