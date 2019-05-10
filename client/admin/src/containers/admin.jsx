import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Main from '../pages/Main';
//import getItems from '../actions/actionCreators/getItems';

const mapStateToProps = state => {
    return {
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        //getItems: (url) => getItems(url)
    }, dispatch)
};

const Admin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default Admin;
