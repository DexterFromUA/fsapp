import React from 'react';
import {ListGroup} from 'react-bootstrap';

import {propsForBookContainer} from '../utils/hoc';
import ItemContainer from './ItemContainer';

const BookContainer = propsForBookContainer(({items}) => (
    <ListGroup className='align-items-center'>
        {
            items.map((item, index) => (<ItemContainer item={item} key={index}/>))
        }
    </ListGroup>
));

export default BookContainer;
