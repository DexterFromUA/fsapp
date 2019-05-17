import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col, Button} from 'react-bootstrap';

const ListItem = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/api/all')
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(e => console.error('error while getting items', e))
    }, []);

    const remove = (event, item) => {
        event.preventDefault();
        console.log('remove', item)
    };

    const edit = () => {
        console.log('edit')
    };

    if (items.length) {
        return (
            <ListGroup>
                {
                    items.map((item, index) =>
                        <ListGroupItem>
                            <Container>
                                <Row className="align-items-center">
                                    <Col>
                                        <b>{item.title}</b>, <i>{item.author}, {item.bookyear}</i>
                                    </Col>
                                    <Col className="">
                                        <Button onClick={remove(event, item)} key={index} variant='danger' className="ml-1 float-right">Remove</Button>
                                        <Button onClick={edit} key={index} variant='warning' className="float-right">Edit</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>)
                }
            </ListGroup>
        )
    }

    return (
        <ListGroup>
            <ListGroupItem>Have no items</ListGroupItem>
        </ListGroup>
    )
};

export default ListItem;
