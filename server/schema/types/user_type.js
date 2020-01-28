const mongoose = require("mongoose");
const modelIndex = require('../../models/index' );
const BoardType = require('./board_type');
const Board = mongoose.model("board");

const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    loggedIn: {
      type: GraphQLBoolean
    },
    token: {
      type: GraphQLString
    },
    board:{
      type: BoardType,
      resolve(parentValue,args){
        return Board.findById(parentValue.boardId)
      }
    }
  })
});

module.exports = UserType;
