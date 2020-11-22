import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import DomesticLoanIndex from './domestic_loan_index';

const mSTP = state => ({
    loans: Object.values(state.entities.loans)
});

const mDTP = dispatch => ({
    fetchAllLoans: () => dispatch(fetchAllLoans())
});

export default connect(mSTP, mDTP)(DomesticLoanIndex);