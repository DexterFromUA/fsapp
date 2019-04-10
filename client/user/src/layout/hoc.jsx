import {compose, withProps} from 'recompose';

const propsForLayout = compose(
    withProps(props => {
        return {
            child: props.children
        }
    })
);

export default propsForLayout;
