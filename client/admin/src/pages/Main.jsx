import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import Loading from '../components/Loading';
import Admin from '../components/Admin';
import {propsForMain} from '../utils/hoc';

const Main = propsForMain(({loading}) => {
    if (!loading) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Admin/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
});

export default Main;
