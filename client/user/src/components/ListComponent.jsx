import React from 'react';
import {Container, Row, Col, Pagination} from 'react-bootstrap';

import ItemComponent from './ItemComponent';

const ListComponent = (props) => {
    const [page, setPage] = React.useState(1);
    const arr = [];

    for (let i = 1; i <= Math.ceil(props.items.count / props.amount); i++) {
        arr.push(i);
    }

    const lastPage = arr[arr.length - 1];

    const goTo = (index) => {
        if (index > arr.length || index < arr[0]) {
            console.log(arr.length, arr[0], index)
        } else {
            console.log('index', index);
            setPage(index);
            console.log('page', page);
            props.getItems(page);
        }
    };

    // TEST VERSION

    // const arr = [];
    // for (let i = 1; i <= Math.ceil(props.items.count / props.amount); i++) {
    //     arr.push(i);
    // }
    // const lastPage = arr[arr.length - 1];
    //
    // const [page, setPage] = React.useState(1);
    //
    // React.useEffect(() => {
    //     if (page > (arr.length)) {
    //         setPage(page - 1);
    //     } else if (page < arr[0]) {
    //         setPage(page + 1);
    //     } else {
    //         props.getItems(page);
    //     }
    // }, [page]);

    return (
        <Container>
            <Row>
                <ItemComponent items={props.items.rows}/>
            </Row>
            <Row>
                <Col>
                    <Pagination>
                        <Pagination.First onClick={() => goTo(1)}/>
                        <Pagination.Prev onClick={() => goTo(page - 1)}/>
                        {
                            arr.map(index => <Pagination.Item key={index}
                                                              onClick={() => goTo(index)}>{index}</Pagination.Item>)
                        }
                        <Pagination.Next onClick={() => goTo(page + 1)}/>
                        <Pagination.Last onClick={() => goTo(lastPage)}/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
};

export default ListComponent;
