// import { $CombinedState } from "redux"

export const fetchAllLendingTransactions = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/lenders'
    })
};

export const createLendingTransaction = (lendingTransation) => {
    return $.ajax({
        method: 'POST',
        url: 'api/lenders',
        data: { lendingTransation: lendingTransation }
    })
};