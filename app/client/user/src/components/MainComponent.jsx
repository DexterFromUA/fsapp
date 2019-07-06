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
    filter: props.filter,
    getFilteredItems: props.getFilteredItems
  };

  React.useEffect(() => {
    props.loginCheck();
    props.getItems(props.amount, props.page)
  }, [props.page, props.amount])

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
