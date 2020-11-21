import { $CombinedState } from "redux"

export const fetchAllLoans = data => {
    return $.ajax({
        method: 'GET',
        url: 'api/loans',
        data
    })
};

export const fetchLoan = id => {
    return $.ajax({
        method: 'GET',
        url: `api/loans/${id}`
    })
}