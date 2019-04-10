import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import Layout from '../layout';

const Main = () => {
    return (
        <React.Fragment>
            <Layout>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary">test</Button>
                    </Col>
                </Row>
            </Container>
            </Layout>
        </React.Fragment>
    )
};

export default Main;
