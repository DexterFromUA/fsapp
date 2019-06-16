import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Table} from 'react-bootstrap';

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
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Order</th>
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
                    <td>Status</td>
                </tr>)
            }
            </tbody>
        </Table>
    )
};

export default OrderList;
