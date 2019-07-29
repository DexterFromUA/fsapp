const { DataSource } = require("apollo-datasource");

class OrderAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  // methods
}

module.exports = OrderAPI;
