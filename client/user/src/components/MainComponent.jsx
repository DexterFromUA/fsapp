import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import Loading from './Loading';
import ListComponent from './ListComponent';

const MainComponent = (props) => {
    const getAllItems = () => {
        props.getItems(props.amount, props.page);
    };

    const getFilteredItems = () => {
        props.getFilteredItems(props.amount, props.page, props.filter.date[0], props.filter.date[1])
    };

    React.useEffect(() => {
        props.loginCheck();
        props.filter.status ? getFilteredItems() : getAllItems() //TODO when calling filtered items, send old page state. Need first
    }, [props.page, props.filter, props.amount, props.lng]);

    if (props.isLoading) {
        return (
            <Layout
                amount={props.amount}
                setAmount={props.setAmount}
                setFilter={props.setFilter}
                cart={props.cart}
                inc={props.inc}
                dec={props.dec}
                deleteFromCart={props.deleteFromCart}
                cleanUp={props.cleanUp}
                user={props.user}
                loginUser={props.loginUser}
            >
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout amount={props.amount}
                setAmount={props.setAmount}
                setFilter={props.setFilter}
                cart={props.cart}
                inc={props.inc}
                dec={props.dec}
                deleteFromCart={props.deleteFromCart}
                cleanUp={props.cleanUp}
                user={props.user}
                loginUser={props.loginUser}
        >
            <Container className="mt-4">
                <Row>
                    <Col>
                        <ListComponent items={props.items}
                                       amount={props.amount}
                                       changePage={props.changePage}
                                       page={props.page}
                                       addToCart={props.addToCart}
                                       cart={props.cart}
                                       inc={props.inc}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};

export default MainComponent;
