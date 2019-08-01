import gql from "graphql-tag";

export const getItemsQuery = gql`
  query getItems {
    items(page: 1, amount: 50) {
      id
      title
      author
      bookyear
      price
      fileUrl
    }
  }
`;
