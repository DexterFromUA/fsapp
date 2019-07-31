const { DataSource } = require("apollo-datasource");

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async removeUser({ id }) {
    const result = await this.store.destroy({
      where: {
        id
      }
    });

    return result;
  }

  async makeAdmin({ id }) {
    const result = await this.store.update(
      {
        role: "admin"
      },
      {
        where: {
          id
        }
      }
    );

    return result;
  }
}

module.exports = UserAPI;
