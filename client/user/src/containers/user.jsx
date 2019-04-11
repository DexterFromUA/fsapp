import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Main from '../pages/Main';
import getItems from '../actions/actionCreators/getItems';

const mapStateToProps = state => {
  return {
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getItems: (url) => getItems(url)
  }, dispatch)
};

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default User;
