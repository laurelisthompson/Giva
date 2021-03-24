import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchAllLendingTransactions } from '../../actions/lender_actions'; 
import Profile from './profile';

// const mSTP = ({ entities: { users }, session }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

const getLoans = (lendingTransactions=[]) => {
    return lendingTransactions.map((lendingTransactions) => {
        return lendingTransactions.lendingTransaction
    })
}

const mSTP = (state) => {
    let lendingTransactions = Object.values(state.entities.loans);

    return {
        currentUser: state.entities.users[state.session.id],
        loans: getLoans(lendingTransactions),
        lendingTransactions: lendingTransactions,
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllLendingTransactions: () => dispatch(fetchAllLendingTransactions()), //added
    }
};

export default connect(mSTP, mDTP)(Profile);