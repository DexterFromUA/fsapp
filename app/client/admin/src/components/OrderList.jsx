import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';

const OrderList = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/orders')
            .then(res => setOrders(res))
            .catch(e => console.error('error while getting orders', e))
    }, []);

    if (orders.length > 0) {
        return (
            <ListGroup>
                {
                    orders.map(order =>
                        <ListGroupItem>
                            <Container>
                                <Row>
                                    <Col>
                                        {order.id}
                                    </Col>
                                    <Col>
                                        {order.userFullName}
                                    </Col>
                                    <Col>
                                        <ListGroup>
                                            {
                                                order.books.map(book =>
                                                    <ListGroupItem>
                                                        {book}
                                                    </ListGroupItem>)
                                            }
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                        {order.totalPrice}
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>)
                }
            </ListGroup>
        )
    }

    return(
        <ListGroup>
            <ListGroupItem>Have no orders</ListGroupItem>
        </ListGroup>
    )
};

export default OrderList;
