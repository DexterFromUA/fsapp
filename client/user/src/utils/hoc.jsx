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
