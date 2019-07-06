import React from "react";
import { Pagination } from "react-bootstrap";

import Ctx from "../context";

const PaginationComponent = () => {
  const {items, amountDefault, changePage, page} = React.useContext(Ctx);
  const arr = [];

  for (let i = 1; i <= Math.ceil(items.count / amountDefault); i++) {
    arr.push(i);
  }

  const lastPage = arr.length;

  const goTo = index => {
    if (index > arr.length || index < arr[0]) {
      return false;
    } else {
      changePage(index);
    }
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => goTo(1)} />
      <Pagination.Prev onClick={() => goTo(page - 1)} />
      {arr.map(index => (
        <Pagination.Item
          active={page === index ? true : false}
          key={index}
          onClick={() => goTo(index)}
        >
          {index}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => goTo(page + 1)} />
      <Pagination.Last onClick={() => goTo(lastPage)} />
    </Pagination>
  );
};

export default PaginationComponent;
