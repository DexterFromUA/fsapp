import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Container, Button} from 'react-bootstrap';

const UserList = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(e => console.error('error while getting users', e))
    }, []);

    if (!users.length) {
        return (
            <ListGroup>
                <ListGroupItem>Have no users</ListGroupItem>
            </ListGroup>
        )
    }

    return (
        <ListGroup>
            {users.map((user, i) =>
                <ListGroupItem key={i}>
                    <Container>
                        <Row className="align-items-center">
                            <Col>{user.name} {user.lastName} <i className="float-right">{user.role}</i></Col>
                            <Col className={user.role === 'admin' ? 'invisible' : ''}>
                                <Button key={i} variant='danger' className="float-right">Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>)
            }
        </ListGroup>
    )
};

export default UserList;
