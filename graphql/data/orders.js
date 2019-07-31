const { DataSource } = require("apollo-datasource");

class OrderAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async newOrder(args) {
    const result = this.store.create({
      userId: args.userId
    });

    return result;
  }

  async changeStatus(args) {
    const result = this.store.update(
      {
        status: args.status
      },
      {
        where: {
          id: args.id
        }
      }
    );

    return result;
  }
}

module.exports = OrderAPI;
