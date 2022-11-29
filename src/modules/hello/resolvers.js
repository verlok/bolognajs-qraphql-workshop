module.exports = {
  Query: {
    hello: (parent, params, context, info) => `Hello ${params.name}`,
    add: (parent, params, context, info) => params.num1 + params.num2,
    getFilmList: (parent, params, context, info) => {
      console.log(context);
      return [
        {
          id: 1,
          description: "A devil rapes an advocate",
          title: "The devil's advocate",
        },
        {
          id: 2,
          description:
            "Gente scazzotta molto e si sfida a gare di birra e salsiccia per una Dune Buggy",
          title: "Altrimenti ci arrabbiamo",
        },
      ];
    },
  },
};
