const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const models = require("./index");

const BoardSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "list"
    }
  ]
});

BoardSchema.statics.addList = (boardId, listId) => {
  const Board = mongoose.model("board");
  const List = mongoose.model("list");

  return Board.findById(boardId).then(board => {
    return List.findById(listId).then(list => {
      board.lists.push(list);
      list.board = board;
      return Promise.all([board.save(), list.save()]).then(
        ([board, list]) => board
      );
    })
  })
}

module.exports = mongoose.model("board", BoardSchema);