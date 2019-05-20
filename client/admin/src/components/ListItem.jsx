import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';
import {useAlert} from 'react-alert'

import Loading from './Loading';

const ListItem = (props) => {
    const [items, setItems] = React.useState([]);
    const [show, changeShow] = React.useState(false);
    const [itemId, setId] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [price, setPrice] = React.useState(null);

    const alert = useAlert();

    const fetchItems = () => {
        fetch('/api/all')
            .then(res => {
                if (!res.ok) {
                    alert.show('ERROR GETTING ITEMS', {
                        type: 'error',
                        position: 'bottom left',
                        transition: 'fade',
                        timeout: 5000
                    });

                    throw new Error('error getting items')
                }
                return res.json()
            })
            .then(res => {
                setItems(res);
                props.switchLoading(false);
            })
            .catch(e => {
                alert.show(`${e}`, {
                    type: 'error',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
            });
    };

    React.useEffect(() => {
        props.switchLoading(true);
        fetchItems()
    }, []);

    const remove = (event, id) => {
        event.preventDefault();

        fetch(`/api/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                alert.show('DELETED', {
                    type: 'success',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
                fetchItems();
            })
            .catch(error => {
                alert.show('ERROR', {
                    type: 'error',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
            })
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

    const close = event => {
        if (event) event.preventDefault();

        changeShow(false);
    };

    const saveChanges = event => {
        if (event) event.preventDefault();

        fetch(`/api/edit/${itemId}`, {
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
        })
            .then(res => {
                changeShow(false);
                alert.show('EDITED', {
                    type: 'success',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
                fetchItems();
            })
            .catch(error => {
                console.error(error);
                alert.show('ERROR', {
                    type: 'error',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
            })
    };

    if (props.loading) {
        return (
            <Loading/>
        )
    }

    if (!items.length) {
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
                                            <b>{item.title}</b>, <i>{item.author}, {item.bookyear}</i> --- ${item.price}
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
            </React.Fragment>
        )
    }

};

export default ListItem;
