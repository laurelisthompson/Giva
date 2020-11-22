import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import ArtsLoanIndex from './arts_loan_index';

const mSTP = state => ({
    loans: Object.values(state.entities.loans)
});

const mDTP = dispatch => ({
    fetchAllLoans: () => dispatch(fetchAllLoans())
});

export default connect(mSTP, mDTP)(ArtsLoanIndex);