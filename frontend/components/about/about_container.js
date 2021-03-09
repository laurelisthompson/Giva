// import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import AboutContainer from './about';

// const mSTP = ({ entities: { users }, session }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

// const mDTP = dispatch => ({
//     logout: () => dispatch(logout())
// });

// export default connect(mSTP, mDTP)(AboutContainer);

import { connect } from 'react-redux';
import AboutContainer from './about';

const mSTP = state => ({
    session: state.session,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(AboutContainer);