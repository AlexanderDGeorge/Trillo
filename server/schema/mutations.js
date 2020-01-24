const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

//models and types here

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {

  }
})

module.exports = mutation;