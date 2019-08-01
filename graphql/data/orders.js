const { DataSource } = require("apollo-datasource");

class OrderAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findOrders() {
    const result = await this.store.findAll();

    return result;
  }

  async newOrder({ userId }) {
    const result = await this.store.create({
      userId: userId,
      status: "Pending"
    });

    return result;
  }

  async changeStatus({ id, status }) {
    const result = await this.store.update(
      {
        status: status
      },
      {
        where: {
          id: id
        }
      }
    );

    return result;
  }
}

module.exports = OrderAPI;
