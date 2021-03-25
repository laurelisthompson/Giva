import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchAllLendingTransactions } from '../../actions/lender_actions'; 
import { fetchAllLoans } from '../../actions/loan_actions';
import Profile from './profile';

// const mSTP = ({ entities: { users }, session }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

// const getLoans = (lendingTransactions=[]) => {
//     return lendingTransactions.map((lendingTransactions) => {
//         return lendingTransactions.lendingTransaction
//     })
// }

const mSTP = (state) => {
    let lenders = Object.values(state.entities.lenders);
    let userLoanIds = lenders.map(lender => lender.loanId || -1);
    let loans = userLoanIds.map(loanId => state.entities.loans[loanId] || {})
    return {
        loans,
        lenders,
        currentUser: state.entities.users[state.session.id], //added to replace session: state.session
        lendingTransactions: Object.values(state.entities.lenders), //added
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllLendingTransactions: () => dispatch(fetchAllLendingTransactions()),
        fetchAllLoans: () => dispatch(fetchAllLoans()),
    }
};

export default connect(mSTP, mDTP)(Profile);