import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import Loading from './Loading';
import ListComponent from './ListComponent';

const MainComponent = (props) => {
    const getAllItems = (page) => {
        props.getItems(props.amount, page);
    };

    React.useEffect(() => {
        getAllItems(1)
    }, []);

    if (props.isLoading) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout getItems={props.getItems} amount={props.amount} setAmount={props.setAmount} getFilteredItems={props.getFilteredItems}>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <ListComponent items={props.items} amount={props.amount} getItems={getAllItems}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};

export default MainComponent;
