import React from 'react';
import {Container, Row, Col, Pagination} from 'react-bootstrap';

import ItemComponent from './ItemComponent';

const ListComponent = (props) => {
    const arr = [];

    for (let i = 1; i <= Math.ceil(props.items.count / props.amount); i++) {
        arr.push(i);
    }

    return (
        <Container>
            <Row>
                <ItemComponent items={props.items.rows}/>
            </Row>
            <Row>
                <Col>
                    <Pagination>
                        <Pagination.First/>
                        <Pagination.Prev/>
                        {
                            arr.map(index => <Pagination.Item key={index}>{index}</Pagination.Item>)
                        }
                        <Pagination.Next/>
                        <Pagination.Last/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
};

export default ListComponent;
