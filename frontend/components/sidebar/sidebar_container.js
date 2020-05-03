import { connect } from 'react-redux';
import SideBar from './sidebar';

const mSTP = ( { session, entities: { users } } ) => ({
  currentUser: users[session.id]
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(SideBar);