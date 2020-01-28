const mongoose = require("mongoose");
const graphql = require("graphql");
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

