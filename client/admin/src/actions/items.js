import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
    loading: ['loading']
});

const itemsActions = {
    Types,
    Creators
};

export default itemsActions;
