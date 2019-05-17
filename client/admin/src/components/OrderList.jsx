import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const OrderList = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/api/orders')
            .then(res => setOrders(res))
            .catch(e => console.error('error while getting orders', e))
    }, []);

    if (orders.length > 0) {
        return (
            <ListGroup>
                {orders.map(order => <ListGroupItem>{order.id} - {order.userid} - {order.productid}</ListGroupItem>)}
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
