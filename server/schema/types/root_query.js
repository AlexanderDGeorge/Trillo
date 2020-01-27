const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const modelIndex = require('../../models/index');
// models here
const User = mongoose.model("user");
const Board = mongoose.model("board")
// types here
const UserType = require("./user_type");
const BoardType = require("./board_type");


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return User.findById(args.id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    boards:{
      type: new GraphQLList(BoardType),
      resolve(){
        return Board.find({});
      }
    },
    board:{
      type: BoardType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(_,args) {
        return Board.findById(args._id);
      }
    }

  })
})

module.exports = RootQuery;