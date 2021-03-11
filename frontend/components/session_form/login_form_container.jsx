import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign in',
    navLink: <Link to="/signup">create a new Giva account</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);