import {compose, withProps} from 'recompose';

export const propsForLayout = compose(
    withProps(props => {
        return {
            child: props.children
        }
    })
);

export const propsForMain = compose(
    withProps(props => {
        return {
            hasErrored: props.hasErrored,
            isLoading: props.isLoading,
            getItems: props.getItems,
            items: props.items
        }
    })
);

export const propsForBookContainer = compose(
    withProps(props => {
        return {
            items: props.items
        }
    })
);

export const propsForItem = compose(
    withProps(props => {
        return {
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            image: props.item.image
        }
    })
);
