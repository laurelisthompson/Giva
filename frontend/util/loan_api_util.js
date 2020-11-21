import { $CombinedState } from "redux"

export const fetchAllLoans = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/loans',
    })
};

export const fetchLoan = id => {
    return $.ajax({
        method: 'GET',
        url: `api/loans/${id}`
    })
}