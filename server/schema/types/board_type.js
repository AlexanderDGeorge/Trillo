const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const UserType = require('./user_type');
const ListType = require('./list_type');
const Board = mongoose.model("board");

const BoardType = new GraphQLObjectType({
  name: "BoardType",
  fields: ()=>({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue){
        return Board.findById(parentValue._id)
          .populate("users")
          .then(board=> board.users);
      }
    },
    lists:{
      type: new GraphQLList(ListType),
      resolve(parentValue){
        return Board.findById(parentValue._id)
         .populate("lists")
         .then(board => board.lists);
      }
    }
  })
});

module.exports = BoardType;

