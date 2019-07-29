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

        return { result }
    }
  },

  Mutation: {
      addItem: async (_, { title, author, bookyear, price }, { dataSources }) => {
          const result = await dataSources.productAPI.addProduct({ title, author, bookyear, price });

          return {
              success: result.length ? true : false,
              message: result.length ? 'success' : 'error',
              item: result
          }
      },

      imageUpdate: async (_, { id, fileUrl }, { dataSources }) => {
          const result = await dataSources.productAPI.updateImage({ id, filename: fileUrl });

          return {
              success: result.length ? true : false,
              message: result.length ? 'success' : 'error',
              item: result
          }
      }
  }
};
