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
        props.filter.status ? getFilteredItems() : getAllItems() //TODO when calling filtered items, send old page state. Need first
    }, [props.page, props.filter, props.amount]);

    if (props.isLoading) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout amount={props.amount}
                setAmount={props.setAmount}
                setFilter={props.setFilter}>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <ListComponent items={props.items}
                                       amount={props.amount}
                                       changePage={props.changePage}
                                       page={props.page}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};

export default MainComponent;
