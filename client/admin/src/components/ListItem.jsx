import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';

const ListItem = () => {
    const [items, setItems] = React.useState([]);
    const [show, changeShow] = React.useState(false);
    const [itemId, setId] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');

    React.useEffect(() => {
        fetch('http://localhost:3001/api/all')
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(e => console.error('error while getting items', e))
    }, []);

    const remove = (event, id) => {
        event.preventDefault();

        fetch(`http://localhost:3001/api/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
    };

    const edit = (event, item) => {
        event.preventDefault();

        setId(item.id);
        setTitle(item.title);
        setAuthor(item.author);
        setYear(item.bookyear);
        changeShow(true);
    };

    const close = event => {
        if (event) event.preventDefault();

        changeShow(false);
    };

    const saveChanges = event => {
        if (event) event.preventDefault();

        fetch(`http://localhost:3001/api/edit/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                year: year
            })
        })
            .then(res => {
                changeShow(false);
            })
            .catch(error => console.error(error))
    };

    if (items.length) {
        return (
            <React.Fragment>
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
                                            <Button onClick={(event) => remove(event, item.id)} key={index}
                                                    variant='danger' className="ml-1 float-right">Remove</Button>
                                            <Button onClick={(event) => edit(event, item)} key={index} variant='warning'
                                                    className="float-right">Edit</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroupItem>)
                    }
                </ListGroup>
                <Modal centered show={show} onHide={close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change "{title}"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={title}
                                              onChange={e => setTitle(e.target.value)}
                                              placeholder="Enter Title"/>
                            </Form.Group>

                            <Form.Group controlId="author">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" value={author}
                                              onChange={e => setAuthor(e.target.value)}
                                              placeholder="Enter Author"/>
                            </Form.Group>

                            <Form.Group controlId="year">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="text" name="year" value={year}
                                              onChange={e => setYear(e.target.value)}
                                              placeholder="Enter Year"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={event => close(event)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={event => saveChanges(event)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }

    return (
        <ListGroup>
            <ListGroupItem>Have no items</ListGroupItem>
        </ListGroup>
    )
};

export default ListItem;
