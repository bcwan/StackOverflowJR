import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from "react-router-dom";

const mSTP = ( { session, entities: { users } }, { history }) => {
  return ({
    history: history,
    currentUser: users[session.id]
  })
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(NavBar));