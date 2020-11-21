import * as APIUtil from '../util.loans_api.util';

export const RECEIVE_LOANS = 'RECEIVE_LOANS';
export const RECEIVE_LOAN = 'RECEIVE_LOAN';

export const receiveLoans = loans => ({
    type: RECEIVE_LOANS,
    loans
});

export const receiveLoan = loan => ({
    type: RECEIVE_LOAN,
    loan
});

export const fetchAllLoans = () => dispatch => {
    return APIUtil.fetchAllLoans()
        .then(loans => dispatch(receiveLoans(loans)))
};

export const fetchLoan = id => dispatch => {
    return APIUtil.fetchLoan(id)
        .then(loan => dispatch(receiveLoan(loan)))
};