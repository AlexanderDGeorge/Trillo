const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const models = require("../../models/index");
const Board = mongoose.model("board");
const List = mongoose.model("list");
const ListType = require("./list_type");


const BoardType = new GraphQLObjectType({
  name: "BoardType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lists: {
      type: new GraphQLList(ListType),
      resolve(parentValue) {
        return Board.findById(parentValue.id)
          .populate("lists")
          .then(board => board.lists);
      }
    }
  })
})

module.exports = BoardType;
