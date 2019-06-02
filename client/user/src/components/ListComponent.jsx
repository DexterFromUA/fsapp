import React from 'react';
import {Container, Row, Col, Pagination} from 'react-bootstrap';

import ItemComponent from './ItemComponent';

const ListComponent = (props) => {
    return (
        <Container>
            <Row>
                    <ItemComponent items={props.items}/>
            </Row>
            <Row>
                <Col className="">
                    <Pagination>
                        <Pagination.First/>
                        <Pagination.Prev/>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
};

export default ListComponent;
