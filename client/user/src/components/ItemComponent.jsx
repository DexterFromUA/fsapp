import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';

const ItemComponent = (props) => {
    if (!props.items.length) {
        return (
            <h1>have no items</h1>
        )
    }

    return (
        props.items.map(item => <Col lg={3}>
            <Card className="text-center mb-3">
                {
                    item.fileUrl !== null && item.fileUrl !== undefined && item.fileUrl !== '' ?
                        <Card.Img variant="top" height="300px"
                                  src={'/uploads/' + item.fileUrl}/> : ''
                }
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.author} - {item.bookyear}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Buy - ${item.price}</Button>
                </Card.Footer>
            </Card>
        </Col>)
    )
};

export default ItemComponent;
