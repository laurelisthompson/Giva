import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import LivestockLoanIndex from './livestock_loan_index';

const mSTP = state => ({
    loans: Object.values(state.entities.loans),
    session: state.session,
});

const mDTP = dispatch => ({
    fetchAllLoans: () => dispatch(fetchAllLoans())
});

export default connect(mSTP, mDTP)(LivestockLoanIndex);