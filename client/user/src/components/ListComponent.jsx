import React from 'react';
import {Container, Row} from 'react-bootstrap';

import ItemComponent from './ItemComponent';
import PaginationComponent from './PaginationComponent';

const ListComponent = (props) => {
    return (
        <Container>
            <Row>
                <ItemComponent items={props.items.rows} addToCart={props.addToCart} cart={props.cart} inc={props.inc}/>
            </Row>
            <Row className='justify-content-center'>
                <PaginationComponent items={props.items}
                                     amount={props.amount}
                                     changePage={props.changePage}
                                     page={props.page}/>
            </Row>
        </Container>
    )
};

export default ListComponent;
