const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const modelIndex = require('../../models/index');
// models here
const User = mongoose.model("user");
const Card = mongoose.model("card");
const Comment = mongoose.model("comment");
// types here
const UserType = require("./user_type");
const CardType = require("./card_type");
const CommentType = require("./comment_type");


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

    card: {
       type: CardType,
       args: { _id: {type: new GraphQLNonNull(GraphQLID)}},
       resolve(_,args) {
         return Card.findById(args._id);
       }
    },
    cards: {
      type: new GraphQLList(CardType),
      resolve(){
        return Card.find({});
      }
    },

    comment: {
       type: CommentType,
       args: { _id: {type: new GraphQLNonNull(GraphQLID)}},
       resolve(_,args){
         return Comment.findById(args._id)
       }
    },

    comments: {
        type: new GraphQLList(CommentType),
        resolve(){
          return Comment.find({});
        }
    }


  })
})

module.exports = RootQuery;