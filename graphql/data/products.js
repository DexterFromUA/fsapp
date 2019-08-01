const { DataSource } = require("apollo-datasource");

class ProductAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async addProduct({ title, author, bookyear, price }) {
    const item = await this.store.create({
      title,
      author,
      bookyear,
      price
    });

    return item;
  }

  async findAll() {
    const items = await this.store.findAndCountAll({
      // offset: page * amount - amount,
      // limit: amount,
      order: [["createdAt", "DESC"]]
    });

    return { items: items.rows, count: items.count };
  }

  async editItem({ id, title, author, bookyear, price }) {
    const result = await this.store.update(
      {
        title,
        author,
        bookyear,
        price
      },
      {
        where: {
          id
        }
      }
    );

    return result;
  }

  async removeItem({ id }) {
    const result = await this.store.destroy({
      where: {
        id
      }
    });
    
    return result;
  }

  async updateImage({ id, filename }) {
    const result = await this.store.update(
      {
        fileUrl: filename
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

module.exports = ProductAPI;
