import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    addItemToList,
    getItemsList,
    removeItem,
    changeItem,
    imageChange,
    removeImage
} from '../actions/actionCreators/itemsCreator';
import ListItem from '../components/ListItem';

const mapStateToProps = state => {
    return {
        loadingItems: state.itemsState.loadingItems,
        errorItems: state.itemsState.errorItems,
        items: state.itemsState.items.items,
        count: state.itemsState.items.count
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getItemsList,
        addItem: addItemToList,
        changeItem,
        deleteItem: removeItem,
        imageChange,
        removeImage
    }, dispatch)
};

const ListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

export default ListItemContainer
