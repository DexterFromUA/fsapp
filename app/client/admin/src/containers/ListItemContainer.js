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
import {changePage} from '../actions/items';
import ListItem from '../components/ListItem';

const mapStateToProps = state => {
    return {
        loadingItems: state.itemsState.loadingItems,
        errorItems: state.itemsState.errorItems,
        items: state.itemsState.items.items,
        count: state.itemsState.items.count,
        page: state.itemsState.page
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getItemsList,
        addItem: addItemToList,
        changeItem,
        deleteItem: removeItem,
        imageChange,
        removeImage,
        changePage
    }, dispatch)
};

const ListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

export default ListItemContainer
