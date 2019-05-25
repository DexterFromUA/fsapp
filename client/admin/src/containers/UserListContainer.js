import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UserList from '../components/UserList';
import {usersApi} from '../actions/actionCreators/usersCreator'

const mapStateToProps = state => {
    return {
        loadingUsers: state.usersState.loadingUsers,
        errorUsers: state.usersState.errorUsers,
        users: state.usersState.users
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        usersApi
    }, dispatch)
};

const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListContainer;
