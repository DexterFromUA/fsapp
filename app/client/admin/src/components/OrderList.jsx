import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Table, Form} from 'react-bootstrap';

const OrderList = (props) => {
    React.useEffect(() => {
        props.getOrders()
    }, []);

    const changeStatus = (event, id) => {
        event.preventDefault();

        props.changeOrderStatus(id, event.target.value)
    };

    if (!props.orders.length) {
        return (
            <ListGroup>
                <ListGroupItem>Have no orders</ListGroupItem>
            </ListGroup>
        )
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order(s)</th>
                    <th>Price(s)</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                props.orders.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.usersModel.name}, {item.usersModel.lastName}</td>
                    <td>
                        <Container>
                        {
                            item.ordersProducts.map(product => <Row>
                                {product.productsmodel.title} x {product.amount}
                            </Row>)
                        }
                        </Container>
                    </td>
                    <td>
                        <Container>
                            {
                                item.ordersProducts.map(pr => <Row>
                                    ${pr.productsmodel.price} x {pr.amount} = ${pr.productsmodel.price * pr.amount}
                                </Row>)
                            }
                        </Container>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control as="select" onChange={event => changeStatus(event, item.id)}>
                                <option selected={item.status === 'Pending'}>Pending</option>
                                <option selected={item.status === 'In Processing'}>In Processing</option>
                                <option selected={item.status === 'Done'}>Done</option>
                            </Form.Control>
                        </Form.Group>
                    </td>
                </tr>)
            }
            </tbody>
        </Table>
    )
};

export default OrderList;
