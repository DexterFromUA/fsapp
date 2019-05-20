import React from 'react';
import {Container, Tab, Row, Col, Nav} from 'react-bootstrap';

import Loading from '../components/Loading';
//import {propsForAdmin} from '../utils/hoc';
import Layout from '../layout';

const ListItem = React.lazy(() => import('../components/ListItem'));
const AddItem = React.lazy(() => import('../components/AddItem'));
const UserList = React.lazy(() => import('../components/UserList'));
const OrderList = React.lazy(() => import('../components/OrderList'));

const Admin = (props) => {
    return (
        <Layout>
            <Container>
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
                                        <ListItem switchLoading={props.switchLoading} loading={props.loading}/>
                                    </React.Suspense>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <React.Suspense fallback={<Loading/>}>
                                        <AddItem switchLoading={props.switchLoading} loading={props.loading}/>
                                    </React.Suspense>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <React.Suspense fallback={<Loading/>}>
                                        <UserList switchLoading={props.switchLoading} loading={props.loading}/>
                                    </React.Suspense>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <React.Suspense fallback={<Loading/>}>
                                        <OrderList switchLoading={props.switchLoading} loading={props.loading}/>
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
