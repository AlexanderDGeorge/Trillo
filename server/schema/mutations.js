const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;
const AuthService = require("../services/auth");

const UserType = require("./types/user_type");
const BoardType = require("./types/board_type");
const ListType = require("./types/list_type");

const Board = require("../models/Board")
const List = require("../models/List");


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
    newBoard: {
      type: BoardType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Board({ title }).save();
      }
    },
    newList: {
      type: ListType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new List({ title }).save();
      }
    },
    addBoardList: {
      type: BoardType,
      args: {
        boardId: { type: new GraphQLNonNull(GraphQLID) },
        listId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, args) {
        return Board.addList(args.boardId, args.listId);
      }
    },
    deleteBoard:{
      type: BoardType,
      args: { _id: { type: GraphQLID }},
      resolve(_, { _id }){
        return Board.remove({ _id });
      }
    },
  }
});

module.exports = mutation;