import {compose, withProps} from 'recompose';

export const propsForLayout = compose(
    withProps(props => {
        return {
            child: props.children
        }
    })
);
