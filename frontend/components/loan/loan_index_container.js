import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import LoanIndex from './loan_index';

const mSTP = state => ({
    loans: Object.values(state.entities.loans)//.map(loan => {
        //loan.receivedAmount = 
        //map over lenders and and filter by loan id equal to loan.id, sum up total amount, return loan at end
    //})
});

const mDTP = dispatch => ({
    fetchAllLoans: () => dispatch(fetchAllLoans())
    //dispatch lending transactions
});

export default connect(mSTP, mDTP)(LoanIndex);