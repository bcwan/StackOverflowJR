import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';


const mSTP = (state) => ({
  errors: state.errors.session,
  link: <Link to="/signup">Sign Up</Link>,
  formType: "Login"
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  deleteErrors: () => dispatch(clearErrors()),
  demoProcessForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);



