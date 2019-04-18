import React from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";

const Loading = () => {
    return (
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
    )
};

export default Loading;
