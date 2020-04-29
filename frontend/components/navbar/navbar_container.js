import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = ( { session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);