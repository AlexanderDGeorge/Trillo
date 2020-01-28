const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql;

const ListType = new GraphQLObjectType({
  name: "ListType",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    }
  })
})

module.exports = ListType;