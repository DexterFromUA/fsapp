const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const connectDB = require("./database");
const ProductAPI = require("./data/products");
const OrderAPI = require("./data/orders");
const UserAPI = require("./data/users");

const store = connectDB();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    productAPI: new ProductAPI({ store: store.products }),
    ordersAPI: new OrderAPI({ store: store.orders }),
    userAPI: new UserAPI({ store: store.users })
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`GraphQL Server started at ${url}`);

  store.sequelize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch(e => console.log("Unable to connect to the database: ", e));
});
