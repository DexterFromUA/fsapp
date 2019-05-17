import React from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';

import Loading from './Loading';

const ListItem = React.lazy(() => import('./ListItem'));
const AddItem = React.lazy(() => import('./AddItem'));
const UserList = React.lazy(() => import('./UserList'));
const OrderList = React.lazy(() => import('./OrderList'));

const Admin = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Item List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Add Item</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">User List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sixth">Order List</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <React.Suspense fallback={<Loading/>}>
                                <ListItem/>
                            </React.Suspense>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <React.Suspense fallback={<Loading/>}>
                                <AddItem/>
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
    )
};

export default Admin;