module.exports = {
  Query: {
    items: async (_, { page, amount }, { dataSources }) => {
      const allItems = await dataSources.productAPI.findAll();

      return { allItems };
    },

    users: async (_, __, { dataSources }) => {
      const result = await dataSources.userAPI.findAll();

      return { result };
    },

    orders: async (_, __, { dataSources }) => {
      const result = await dataSources.orderAPI.findAll();

      return { result };
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
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        item: result
      };
    },

    imageUpdate: async (_, { id, fileUrl }, { dataSources }) => {
      const result = await dataSources.productAPI.updateImage({
        id,
        filename: fileUrl
      });

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        item: result
      };
    },

    editItem: async (_, args, { dataSources }) => {
      const result = await dataSources.productAPI.editItem(args);

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        item: result
      };
    },

    removeItem: async (_, { id }, { dataSources }) => {
      const result = await dataSources.productAPI.removeItem({ id });

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        items: result
      };
    },

    removeUser: async (_, { id }, { dataSources }) => {
      const result = await dataSources.userAPI.removeUser({ id });

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        user: result
      };
    },

    makeAdmin: async (_, { id }, { dataSources }) => {
      const result = await dataSources.userAPI.makeAdmin({ id });

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        user: result
      };
    },

    newOrder: async (_, args, { dataSources }) => {
      const result = await dataSources.orderAPI.newOrder(args);

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        order: result
      };
    },

    changeStatus: async (_, args, { dataSources }) => {
      const result = await dataSources.orderAPI.changeStatus(args);

      return {
        success: result.length ? true : false,
        message: result.length ? "success" : "error",
        order: result
      };
    }
  }
};
