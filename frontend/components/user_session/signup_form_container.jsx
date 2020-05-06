import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';



const mSTP = (state) => ({
  errors: state.errors.session,
  link: <Link to="/login">Log In Account</Link>,
  formType: "Sign Up"
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  demoProcessForm: (user) => dispatch(login(user)),
  deleteErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
