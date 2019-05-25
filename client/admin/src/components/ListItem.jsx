import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';

import Loading from './Loading';

const ListItem = (props) => {
    const [show, changeShow] = React.useState(false);
    const [newItem, changeNew] = React.useState(false);
    const [itemId, setId] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [price, setPrice] = React.useState(null);

    React.useEffect(() => {
        props.api('all')
    }, []);

    const remove = (event, id) => {
        event.preventDefault();

        props.api('remove', {method: 'DELETE'}, id)
    };

    const edit = (event, item) => {
        event.preventDefault();

        setId(item.id);
        setTitle(item.title);
        setAuthor(item.author);
        setYear(item.bookyear);
        setPrice(item.price);
        changeShow(true);
    };

    const add = event => {
        event.preventDefault();

        setId(null);
        setTitle('');
        setAuthor('');
        setYear('');
        setPrice(null);
        changeNew(true);
    };

    const close = event => {
        if (event) event.preventDefault();

        changeShow(false);
        changeNew(false);
    };

    const saveChanges = event => {
        if (event) event.preventDefault();

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                year: year,
                price: price
            })
        };

        props.api('edit', options, itemId);

        changeShow(false);
    };

    const addItem = event => {
        if (event) event.preventDefault();

        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                author: author,
                year: year,
                price: price
            })
        };

        props.api('add', options);
        changeNew(false);
    };

    if (props.loadingItems) {
        return (
            <Loading/>
        )
    }

    if (!props.items.length) {
        return (
            <Container>
                <Row>
                    <Col>
                        Have no items
                    </Col>
                </Row>
            </Container>
        )
    }

    if (props.items.length) {
        return (
            <React.Fragment>
                <Button variant="outline-success" size="lg" block onClick={event => add(event)}>ADD NEW</Button>

                <ListGroup className="my-4">
                    {
                        props.items.map((item, index) =>
                            <ListGroupItem>
                                <Container>
                                    <Row className="align-items-center">
                                        <Col>
                                            <b>{item.title}</b>, <i>{item.author}, {item.bookyear}</i> {item.price ? ' --- $' + item.price : ''}
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
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" value={price}
                                              onChange={e => setPrice(e.target.value)}
                                              placeholder="Enter Price"/>
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
                <Modal centered show={newItem} onHide={close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new</Modal.Title>
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
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" value={price}
                                              onChange={e => setPrice(e.target.value)}
                                              placeholder="Enter Price"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={event => close(event)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={event => addItem(event)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }

};

export default ListItem;
