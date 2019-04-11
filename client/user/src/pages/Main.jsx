import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import BookContainer from '../components/BookContainer';
import {propsForMain} from '../utils/hoc'

const Main = propsForMain(({ items, hasErrored, isLoading, getItem }) => {
    return (
        <React.Fragment>
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            {isLoading}
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </React.Fragment>
    )
});

export default Main;
