import { connect } from 'react-redux';
import { fetchLoan } from '../../actions/loan_actions';
import LoanShow from './loan_show';

const mSTP = (state, ownProps) => ({
    loan: state.loans[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchLoan: id => dispatch(fetchLoan(id))
});

export default connect(mSTP, mDTP)(LoanShow);