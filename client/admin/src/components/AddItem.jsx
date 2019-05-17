import React from 'react';
import {Form, Button} from 'react-bootstrap';

const AddItem = () => {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');

    const send = () => {
        fetch('http://localhost:3001/api/add', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                author: author,
                year: year
            })
        })
            .then(res => console.log(res))
            .catch(e => console.error(e))
    };

    return (
        <Form>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}
                              placeholder="Enter Title"/>
                <Form.Text className="text-muted">
                    Title of the book
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)}
                              placeholder="Enter Author"/>
                <Form.Text className="text-muted">
                    Author of the book
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" name="year" value={year} onChange={e => setYear(e.target.value)}
                              placeholder="Enter Year"/>
                <Form.Text className="text-muted">
                    Year of the book
                </Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={send} className="float-right">
                Add
            </Button>
        </Form>
    )
};

export default AddItem;
