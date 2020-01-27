const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const models = require('../../models/index')
const Board = mongoose.model("board");

const BoardType = new GraphQLObjectType({
  name: "BoardType",
  fields: ()=>({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    users: {
      type: new GraphQLList(require('./user_type')),
      resolve(parentValue){
        return Board.findById(parentValue._id)
          .populate("users")
          .then(board=> board.users);
      }
    },
    // lists:{                                            //===>>> waiting list type
    //   type: new GraphQLList(require('./list_type')),
    //   resolve(parentValue){
    //     return Board.findById(parentValue._id)
    //      .populate("lists")
    //      .then(board => board.lists);
    //   }
    // }
  })
});

module.exports = BoardType;

