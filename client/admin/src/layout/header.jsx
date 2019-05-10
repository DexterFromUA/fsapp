import React from 'react';
import {Container, Row, Col, Navbar} from 'react-bootstrap';

const Header = () => {
    return(
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar expand="lg">
                            <Navbar.Brand>
                                Admin Panel
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Navbar.Text className="pl-3 pt-2">
                                    Signed as: John Doe
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Header;
