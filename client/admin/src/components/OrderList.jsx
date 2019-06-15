import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';

const OrderList = (props) => {
    React.useEffect(() => {
        props.getOrders()
    }, []);

    if (!props.orders.length) {
        return (
            <ListGroup>
                <ListGroupItem>Have no orders</ListGroupItem>
            </ListGroup>
        )
    }

    return (
        <ListGroup>
            {
                props.orders.map(order =>
                    <ListGroupItem>
                        <Container>
                            <Row>
                                <Col>
                                    {order.id}
                                </Col>
                                <Col>
                                    {order.usersModel.name}, {order.usersModel.lastName}
                                </Col>
                                {/*<Col>*/}
                                {/*    <ListGroup>*/}
                                {/*        {*/}
                                {/*            order.books.map(book =>*/}
                                {/*                <ListGroupItem>*/}
                                {/*                    {book}*/}
                                {/*                </ListGroupItem>)*/}
                                {/*        }*/}
                                {/*    </ListGroup>*/}
                                {/*</Col>*/}
                                {/*<Col>*/}
                                {/*    {order.totalPrice}*/}
                                {/*</Col>*/}
                            </Row>
                        </Container>
                    </ListGroupItem>)
            }
        </ListGroup>
    )
};

export default OrderList;
