const SQL = require("@nearform/sql");

module.exports = {
  Query: {
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
