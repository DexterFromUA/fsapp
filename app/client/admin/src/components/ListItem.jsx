import React from 'react';
import {ListGroup, ListGroupItem, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap';

import Loading from './Loading';
import PaginationComponent from './PaginationComponent';

const ListItem = (props) => {
    const [show, changeShow] = React.useState(false);
    const [newItem, changeNew] = React.useState(false);
    const [newImage, changeImage] = React.useState(false);
    const [itemId, setId] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [price, setPrice] = React.useState(null);
    const [imageId, setImageId] = React.useState(null);
    const [tempUrl, setTempUrl] = React.useState('');
    const [imageUrl, setUrl] = React.useState('');

    React.useEffect(() => {
        props.getItemsList(props.page)
    }, [props.page]);

    const remove = (event, id) => {
        event.preventDefault();

        props.deleteItem(id)
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
        changeImage(false);
    };

    const saveChanges = event => {
        if (event) event.preventDefault();

        const item = {
            id: itemId,
            title: title,
            author: author,
            bookyear: year,
            price: price
        };

        props.changeItem(item);
        changeShow(false);
    };

    const addItem = event => {
        if (event) event.preventDefault();

        const item = {
            title: title,
            author: author,
            bookyear: year,
            price: price
        };

        props.addItem(item);
        changeNew(false);
    };

    const addImage = (event, id, url) => {
        event.preventDefault();

        setImageId(id);
        setUrl(url);
        setTempUrl(url);
        changeImage(true);
    };

    const changeSelectedImage = (event) => {
        let upload = new FormData();
        let name = Date.now() + '-' + event.target.files[0].name;

        upload.append('name', name);
        upload.append('image', event.target.files[0]);

        props.imageChange(imageId, name, upload);
    };

    const deleteFile = event => {
        event.preventDefault();

        props.removeImage(imageId, imageUrl)
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

    return (
        <React.Fragment>
            <Button variant="outline-success" size="lg" block onClick={event => add(event)}>ADD NEW</Button>

            <ListGroup className="my-4">
                {
                    props.items.map((item, index) =>
                        <ListGroupItem>
                            <Container>
                                <Row className="align-items-center">
                                    <Col sm={12} md={6} lg={7} xl={8}>
                                        <b>{item.title}</b>, <i>{item.author}, {item.bookyear}</i> {item.price ? ' --- $' + item.price : ''}
                                    </Col>
                                    <Col sm={12} md={6} lg={5} xl={4}>
                                        <Button disabled={item.id ? false : true} size="sm"
                                                onClick={(event) => remove(event, item.id)} key={index}
                                                variant='outline-danger' className="ml-1 float-right">Remove</Button>
                                        <Button disabled={item.id ? false : true} onClick={(event) => edit(event, item)}
                                                key={index} variant='outline-warning' size="sm"
                                                className="float-right">Edit</Button>
                                        <Button disabled={item.id ? false : true}
                                                onClick={(event) => addImage(event, item.id, item.fileUrl)} key={index}
                                                variant='outline-primary' size='sm'
                                                className="mr-1 float-right">{item.fileUrl ? 'Change Image' : 'Add Image'}</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroupItem>)
                }
            </ListGroup>

            <Row className='justify-content-center'>
                <PaginationComponent
                    count={props.count}
                    changePage={props.changePage}
                    page={props.page}
                />
            </Row>

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

            <Modal centered show={newImage} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {tempUrl !== '' && tempUrl !== null && tempUrl !== undefined ?
                            <img alt={tempUrl} width='100%' height='100%' className='mb-2' src={'/uploads/' + tempUrl}/> :
                            null
                        }
                        <Form.Group>
                            <Form.Control type="file" onChange={event => changeSelectedImage(event)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={event => close(event)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={event => deleteFile(event)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

};

export default ListItem;
