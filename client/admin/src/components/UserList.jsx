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

    const makeNewAdmin = (event, id) => {
        event.preventDefault();

        props.makeAdmin(id);
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
                                <Button onClick={event => makeNewAdmin(event, user.id)} className="float-right mr-1">Make Admin</Button>
                            </Col>
                            <Button disabled={props.users.length < 2 && user.role === 'admin' ? true : false} key={i} variant='danger' className="float-right" onClick={(event) => deleteUser(event, user)}>Delete</Button>
                        </Row>
                    </Container>
                </ListGroupItem>)
            }
        </ListGroup>
    )
};

export default UserList;
