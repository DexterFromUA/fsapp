import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import Loading from './Loading';
import FilterComponent from './FilterComponent';
import ListComponent from './ListComponent';
import CartComponent from './CartComponent';

const MainComponent = (props) => {
    React.useEffect(() => {
        props.getItems();
    }, []);

    if (props.isLoading) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout>
            <Container className="mt-4">
                <Row>
                    {/*<Col xs={12} lg={3}>*/}
                    {/*    <FilterComponent/>*/}
                    {/*</Col>*/}
                    <Col>
                        <ListComponent items={props.items}/>
                    </Col>
                    {/*<Col xs={12} lg={3}>*/}
                    {/*    <CartComponent cart={props.cart}/>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </Layout>
    )
};

export default MainComponent;
