import React from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';

import Layout from '../layout';
import BookContainer from '../components/BookContainer';
import {propsForMain} from '../utils/hoc'

const Main = propsForMain(({hasErrored, isLoading, getItems, items}) => {
    const url = 'https://5c4070942928860014e07001.mockapi.io/items';

    React.useEffect(() => {
        getItems(url);
    }, []);

    if (isLoading) {
        return (
            <Layout>
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <Spinner animation="grow" variant="primary"/>
                            <Spinner animation="grow" variant="secondary"/>
                            <Spinner animation="grow" variant="success"/>
                            <Spinner animation="grow" variant="danger"/>
                            <Spinner animation="grow" variant="warning"/>
                            <Spinner animation="grow" variant="info"/>
                            <Spinner animation="grow" variant="dark"/>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <BookContainer items={items}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
});

export default Main;
