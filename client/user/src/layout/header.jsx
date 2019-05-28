import React from 'react';
import {Container, Row, Col, Navbar, Form, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

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
                                <Form inline className="pl-3 pt-2">
                                    <Form.Control type="number" placeholder="20" className="mr-sm-2"/>
                                    <Button variant="outline-primary">Change</Button>
                                </Form>
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
