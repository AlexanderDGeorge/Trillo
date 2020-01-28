const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID ,GraphQLNonNull} = graphql;

const AuthService = require("../services/auth");
//type:
const UserType = require("./types/user_type");
const BoardType = require('./types/board_type');

//model:
const Board = mongoose.model("board");



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
    addBoard:{
      type: BoardType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(_, { name }){
        return new Board({ name }).save();
      }
    },
    deleteBoard:{
      type: BoardType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(_, { _id }){
        return Board.remove({ _id });
      }
    },
  }
});

module.exports = mutation;