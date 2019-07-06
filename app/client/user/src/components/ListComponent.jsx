import React from "react";
import { Container, Row } from "react-bootstrap";
import { Typography, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

import Ctx from "../context";
import ItemComponent from "./ItemComponent";
import PaginationComponent from "./PaginationComponent";

const ListComponent = () => {
  const { t } = useTranslation();
  const { search, items, getItems, amountDefault, page, searchAction, filter, setFilter } = React.useContext(Ctx);

  const backButton = event => {
    event.preventDefault();
    searchAction(false, '');
    setFilter(false, [])
    getItems(amountDefault, page);
  };

  return (
    <Container>
      {search.status || filter.status === true ? (
        <Row className="mb-4">
          <Button
            variant="outlined"
            color="primary"
            className="mr-4"
            onClick={event => backButton(event)}
          >
            <ArrowBack />
          </Button>
          <Typography variant="h4">
            {search.status === true && filter.status === false ? t("Search") + ': ' + items.rows.length + " " + t("results") : null}
            {search.status === false && filter.status === true ? t("Filter by Date") + ': ' + items.rows.length + " " + t("results") : null}
            {search.status === true && filter.status === true ? t("Search") + ' & ' + t("Filter by Date") + ': ' + items.rows.length + " " + t("results") : null}
          </Typography>
        </Row>
      ) : null}
      <Row>
        <ItemComponent />
      </Row>
      {search.status || filter.status === true ?
      null : 
      (<Row className="justify-content-center">
        <PaginationComponent />
      </Row>)}
    </Container>
  );
};

export default ListComponent;
