const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;
const AuthService = require("../services/auth");

const models = require("../models/index");
const UserType = require("./types/user_type");
const BoardType = require("./types/board_type");
const ListType = require("./types/list_type");

const Board = mongoose.model("board")
const List = mongoose.model("list");
const Card = mongoose.model("card");


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
      resolve(_, { title }) {
        return new Board({ title }).save();
      }
    },
    updateBoard: {
      type: BoardType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(_, { id, title }) {
        const newBoard = {};
        if (id) newBoard.id = id;
        if (title) newBoard.title = title;
        return Board.findByIdAndUpdate(
          { id: id },
          { $set: newBoard },
          { new: true },
          (err, board => {
            return board
          })
        )
      }
    },
    deleteBoard: {
      type: BoardType,
      args: { id: { type: GraphQLID } },
      resolve(_, { id }) {
        return Board.deleteOne({ _id: id });
      }
    },
    newList: {
      type: ListType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(_, { title }) {
        return new List({ title }).save();
      }
    },
    updateList: {
      type: ListType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString }
      },
      resolve(_, { id, title }) {
        const newList = {};
        if (id) newList.id = id;
        if (title) newList.title = title;
        return List.findByIdAndUpdate(
          { id: id },
          { $set: newList },
          { new: true },
          (err, list) => {
            return list;
          }
        )
      }
    },
    deleteList: {
      type: ListType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { id }) {
        return List.deleteOne({ _id: id })
      }
    },
    addBoardList: {
      type: BoardType,
      args: {
        boardId: { type: new GraphQLNonNull(GraphQLID) },
        listId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(_, { boardId, listId }) {
        return Board.addList(boardId, listId);
      }
    },
  }
});

module.exports = mutation;