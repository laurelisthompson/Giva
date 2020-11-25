import * as APIUtil from '../util/loan_api_util';

export const RECEIVE_LOANS = 'RECEIVE_LOANS';
export const RECEIVE_LOAN = 'RECEIVE_LOAN';

export const receiveLoans = loans => ({
    type: RECEIVE_LOANS,
    loans
});

export const receiveLoan = payload => ({
    type: RECEIVE_LOAN,
    loan: payload.loan,
    lenders: payload.lenders
});

export const fetchAllLoans = () => dispatch => {
    return APIUtil.fetchAllLoans()
        .then(loans => dispatch(receiveLoans(loans)))
};

export const fetchLoan = id => dispatch => {
    return APIUtil.fetchLoan(id)
        .then(payload => dispatch(receiveLoan(payload)))
};