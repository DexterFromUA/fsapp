module.exports = {
  Query: {
    items: async (_, { page, amount }, { dataSources }) => {
      const result = await dataSources.productAPI.findAll();

      return result.items;
    },

    users: async (_, __, { dataSources }) => {
      const result = await dataSources.userAPI.findAll();

      return result;
    },

    orders: async (_, __, { dataSources }) => {
      const result = await dataSources.orderAPI.findOrders();

      return result;
    }
  },

  Mutation: {
    addItem: async (_, { title, author, bookyear, price }, { dataSources }) => {
      const result = await dataSources.productAPI.addProduct({
        title,
        author,
        bookyear,
        price
      });

      return {
        success: result ? true : false,
        message: result ? "success" : "error",
        item: result
      };
    },

    imageUpdate: async (_, { id, fileUrl }, { dataSources }) => {
      const result = await dataSources.productAPI.updateImage({
        id,
        filename: fileUrl
      });

      return {
        success: result ? true : false,
        message: result ? "success" : "error",
        item: result
      };
    },

    editItem: async (_, args, { dataSources }) => {
      const result = await dataSources.productAPI.editItem(args);

      return {
        success: result ? true : false,
        message: result ? "success" : "error"
      };
    },

    removeItem: async (_, { id }, { dataSources }) => {
      const result = await dataSources.productAPI.removeItem({ id });

      return {
        success: result ? true : false,
        message: result ? "success" : "error",
        items: result //delete
      };
    },

    removeUser: async (_, { id }, { dataSources }) => {
      const result = await dataSources.userAPI.removeUser({ id });

      return {
        success: result == 1 ? true : false,
        message: result == 1 ? "success" : "error"
      };
    },

    makeAdmin: async (_, { id }, { dataSources }) => {
      const result = await dataSources.userAPI.makeAdmin({ id });

      return {
        success: result == 1 ? true : false,
        message: result == 1 ? "success" : "error"
      };
    },

    newOrder: async (_, { userId }, { dataSources }) => {
      const result = await dataSources.orderAPI.newOrder({ userId });

      return {
        success: result ? true : false,
        message: result ? "success" : "error"
      };
    },

    changeStatus: async (_, { id, status }, { dataSources }) => {
      const result = await dataSources.orderAPI.changeStatus({ id, status });

      return {
        success: result == 1 ? true : false,
        message: result == 1 ? "success" : "error"
      };
    }
  }
};
