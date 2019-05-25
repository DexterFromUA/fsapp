import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Container, Button} from 'react-bootstrap';

const UserList = (props) => {
    React.useEffect(() => {
        props.usersApi()
    }, []);

    const deleteUser = (event, user) => {
        event.preventDefault();

        props.usersApi({method: 'DELETE'}, user)
    };

    if (!props.users.length) {
        return (
            <ListGroup>
                <ListGroupItem>Have no users</ListGroupItem>
            </ListGroup>
        )
    }

    return (
        <ListGroup>
            {props.users.map((user, i) =>
                <ListGroupItem key={i}>
                    <Container>
                        <Row className="align-items-center">
                            <Col>{user.name} {user.lastName} --- <i>{user.role}</i></Col>
                            <Col className={user.role === 'admin' ? 'invisible' : ''}>
                                <Button key={i} variant='danger' className="float-right" onClick={(event) => deleteUser(event, user)}>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>)
            }
        </ListGroup>
    )
};

export default UserList;
