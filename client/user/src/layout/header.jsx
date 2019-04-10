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
                                Book shop
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Navbar.Text>
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
