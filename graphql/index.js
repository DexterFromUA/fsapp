const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const connectDatabase = require("./config/db");
const ProductAPI = require("./data/products");
const OrderAPI = require("./data/orders");
const UserAPI = require("./data/users");
const resolvers = require("./resolvers");

const store = connectDatabase();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    productAPI: new ProductAPI({ store }),
    ordersAPI: new OrderAPI({ store }),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`GraphQL Server started at ${url}`);
});
