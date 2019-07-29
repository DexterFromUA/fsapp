const { gql } = require("apollo-server");
const { GraphQLDateTime } = require("graphql-iso-date");

const typeDefs = gql`
  type Query {
    items(page: Int, amount: Int): [Item]
    users: [User]
    orders: [Order]
  }

  type Mutation {
    addItem(
      title: String
      author: String
      bookyear: String
      price: Float
    ): ItemResponse
    imageUpdate(
        id: ID!
        fileUrl: String
    ): ItemResponse
    editItem(
      id: ID!
      title: String
      author: String
      bookyear: String
      price: Float
    ): ItemResponse
    removeItem(id: ID!): ItemsResponse
    removeUser(id: ID!): UserResponse
    makeAdmin(id: ID!): UserResponse
    newOrder(
        userid: Int!
        items: [Item!]
    ): OrderResponse
    changeStatus(
        id: ID!
        status: String!
    ): OrderResponse
  }

  type Item {
    id: ID!
    title: String
    author: String
    bookyear: String
    price: Float
    fileUrl: String
    createAt: GraphQLDateTime
    updatedAt: GraphQLDateTime
  }

  type User {
    id: ID!
    name: String
    lastName: String
    mail: String
    password: String
    role: String
  }

  type Order {
    id: ID!
    userid: Int
    status: String
  }

  type ItemResponse {
    success: Boolean!
    message: String
    item: Item
  }

  type ItemsResponse {
    success: Boolean!
    message: String
    item: [Item]
  }

  type UserResponse {
    success: Boolean!
    message: String
    user: User
  }

  type OrderResponse {
    success: Boolean!
    message: String
    order: Order
  }
`;

module.exports = typeDefs;
