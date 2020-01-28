const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const UserType = require("./types/user_type");
const CardType = require("./types/card_type");
const CommentType = require("./types/comment_type");

const Card = mongoose.model("card");
const Comment = mongoose.model("comment");

const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return AuthService.logout(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: {
          type: GraphQLString
        }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    },

     newCard: {
       type: CardType,
        args: {
          title: {type: GraphQLString },
          description: {type: GraphQLString}
        },
        resolve(_,{title,description}){
          return new Card({title,description}).save();
        }
     },

     deleteCard: {
       type: CardType,
       args: {_id: {type:GraphQLID}},
       resolve(_, {_id}) {
         return Card.remove({_id});
       }
     },

     updateCard: {
       type: CardType,
       args: {
         id: {type: GraphQLID},
         title: {type: GraphQLString},
         description: {type: GraphQLString}
       },
       resolve(_,{id,title,description}){
         return Card.updateCard(id,title,description)
       }
     },

     newComment: {
       type: CommentType,
       args: {
         body: {type: GraphQLString},
       },
       resolve(_,{body}){
          return new Comment({body}).save();
       }
     },

     deleteComment: {
       type: CommentType,
       args: {_id: {type: GraphQLID} },
       resolve(_,{_id}){
          return Comment.remove({_id});
       }

     }
  }
});

module.exports = mutation;