import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign in',
    navLink: <Link to="/signup">create a new Giva account</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);