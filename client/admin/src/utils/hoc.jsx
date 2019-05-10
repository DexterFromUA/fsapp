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
            loading: props.loading
        }
    })
);
