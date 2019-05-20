import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAlert} from 'react-alert';

const AddItem = () => {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [price, setPrice] = React.useState(null);

    const alert = useAlert();

    const send = () => {
        fetch('/api/add', {
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
        })
            .then(res => {
                alert.show('ADDED', {
                    type: 'success',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });

                setTitle('');
                setAuthor('');
                setYear('');
                setPrice('')
            })
            .catch(e => {
                alert.show('ERROR', {
                    type: 'success',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
            })
    };

    return (
        <Form>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}
                              placeholder="Type here"/>
                <Form.Text className="text-muted">
                    Title of the book
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)}
                              placeholder="Type here"/>
                <Form.Text className="text-muted">
                    Author of the book
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" name="year" value={year} onChange={e => setYear(e.target.value)}
                              placeholder="Type here"/>
                <Form.Text className="text-muted">
                    Year of the book
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={e => setPrice(e.target.value)}
                              placeholder="Type here"/>
                <Form.Text className="text-muted">
                    Price of the book
                </Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={send} className="float-right">
                Add
            </Button>
        </Form>
    )
};

export default AddItem;
