const SQL = require("@nearform/sql");

module.exports = {
  Query: {
    hello: (parent, params, context, info) => `Hello ${params.name}`,
    add: (parent, params, context, info) => params.num1 + params.num2,
    getFilmList: async (parent, params, context, info) => {
      const query = `SELECT * FROM film LIMIT ${params.limit}`;
      const result = await context.app.pg.query(query);
      return result.rows;
    },
  },
  Film: {
    id: (parent) => parent.film_id,
  },
};
