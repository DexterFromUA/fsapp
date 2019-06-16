import React from 'react';
import {Container, Tab, Row, Col, Nav} from 'react-bootstrap';

import Loading from '../components/Loading';
import Layout from '../layout';

const ListItem = React.lazy(() => import('../containers/ListItemContainer'));
const UserList = React.lazy(() => import('../containers/UserListContainer'));
const OrderList = React.lazy(() => import('../containers/OrderListContainer'));

const Admin = () => {
    return (
        <Layout>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col lg={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Item List</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">User List</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Order List</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <React.Suspense fallback={<Loading/>}>
                                        <ListItem/>
                                    </React.Suspense>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <React.Suspense fallback={<Loading/>}>
                                        <UserList/>
                                    </React.Suspense>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <React.Suspense fallback={<Loading/>}>
                                        <OrderList/>
                                    </React.Suspense>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Layout>
    )
};

export default Admin;
