import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import GreetingForm from './greeting';

const mSTP = ({ entities: { users }, session }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(GreetingForm);