import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Layout from '../layout';
import Loading from '../components/Loading';
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
                <Loading/>
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
