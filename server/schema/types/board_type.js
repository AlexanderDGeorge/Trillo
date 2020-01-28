const mongoose = require("mongoose");
const graphql = require("graphql");
<<<<<<< HEAD
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const models = require('../../models/index')
const User = mongoose.model("user");

const BoardType = new GraphQLObjectType({
  name: "BoardType",
  fields: ()=>({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    users: {
      type: new GraphQLList(require('./user_type')),
      resolve(parentValue,_){
        return User.find({boardId: parentValue._id})
=======
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
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
      type: ListType,
      resolve(parentValue) {
        return Board.findById(parentValue.id)
          .populate("lists")
          .then(board => board.lists);
>>>>>>> 1e61388336efb93e75b01a91dbde2fc351cafb1b
      }
    }
  })
})

module.exports = BoardType;
