module.exports = {
  Query: {
    hello: (parent, params, context, info) => `Hello ${params.name}`,
    add: (parent, params, context, info) => params.num1 + params.num2,
  },
};
