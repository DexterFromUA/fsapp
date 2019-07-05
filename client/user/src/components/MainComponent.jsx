import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../layout";
import Loading from "./Loading";
import Ctx from "../context";
import ListComponent from "./ListComponent";

const MainComponent = props => {
  const ctxValue = {
    amountDefault: props.amount,
    setAmount: props.setAmount,
    setFilter: props.setFilter,
    cart: props.cart,
    inc: props.inc,
    dec: props.dec,
    deleteFromCart: props.deleteFromCart,
    cleanUp: props.cleanUp,
    user: props.user,
    loginUser: props.loginUser,
    logoutUser: props.logoutUser,
    searchItems: props.searchItems,
    items: props.items,
    changePage: props.changePage,
    page: props.page,
    addToCart: props.addToCart,
    search: props.search,
    getItems: props.getItems,
    searchAction: props.searchAction,
    filter: props.filter
  };

  const getAllItems = () => {
    props.getItems(props.amount, props.page);
  };

  const getFilteredItems = () => {
    props.getFilteredItems(
      props.amount,
      props.page,
      props.filter.date[0],
      props.filter.date[1]
    );
  };

  React.useEffect(() => {
    props.loginCheck();
    props.filter.status ? getFilteredItems() : getAllItems(); //TODO when calling filtered items, send old page state. Need first
  }, [props.page, props.filter, props.amount, props.lng]);

  if (props.isLoading) {
    return (
      <Ctx.Provider value={ctxValue}>
        <Layout>
          <Loading />
        </Layout>
      </Ctx.Provider>
    );
  }

  return (
    <Ctx.Provider value={ctxValue}>
      <Layout>
        <Container className="mt-4">
          <Row>
            <Col>
              <ListComponent />
            </Col>
          </Row>
        </Container>
      </Layout>
    </Ctx.Provider>
  );
};

export default MainComponent;
