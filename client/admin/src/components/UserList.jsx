import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Container, Button} from 'react-bootstrap';
import {useAlert} from "react-alert";

const UserList = () => {
    const [users, setUsers] = React.useState([]);

    const alert = useAlert();

    React.useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(e => {
                alert.show('CANT GET USERS', {
                    type: 'error',
                    position: 'bottom left',
                    transition: 'fade',
                    timeout: 5000
                });
            })
    }, []);

    const deleteUser = (event, id) => {
        event.preventDefault();

        fetch(`/api/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res);
                if (res.ok) {
                    alert.show('DELETED',{
                        type: 'success',
                        timeout: 5000,
                        position: 'bottom left',
                        transition: 'fade'
                    });
                }
            })
            .catch(error => {
                alert.show('ERROR', {
                    type: 'error',
                    timeout: 5000,
                    position: 'bottom left',
                    transition: 'fade'
                })
            })
    };

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
                            <Col>{user.name} {user.lastName} --- <i>{user.role}</i></Col>
                            <Col className={user.role === 'admin' ? 'invisible' : ''}>
                                <Button key={i} variant='danger' className="float-right" onClick={(event) => deleteUser(event, user.id)}>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>)
            }
        </ListGroup>
    )
};

export default UserList;
