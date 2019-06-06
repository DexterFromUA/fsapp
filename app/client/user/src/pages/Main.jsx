import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import User from '../containers/user';


const Main = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <User/>
                </Col>
            </Row>
        </Container>
    )
};

export default Main;
