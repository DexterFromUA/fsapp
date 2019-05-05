import React from 'react';
import {ListGroupItem, Card, Button, Container, Row, Image} from 'react-bootstrap';

import {propsForItem} from '../utils/hoc';

const ItemContainer = propsForItem(({id, name, price, image}) => {
    return (
        <ListGroupItem>
            <Container>
                <Row>
                    <Image src={image} style={{width: '400px', height: '400px'}} rounded/>
                    <Card border='light' className='text-center' style={{width: '30rem'}}>
                        <Card.Body>
                            <Card.Title>
                                {name}
                            </Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-right'>
                            <Button variant='primary'>Price: ${price}</Button>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </ListGroupItem>
    )
});

export default ItemContainer;
