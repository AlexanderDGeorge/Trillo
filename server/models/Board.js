const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const models = require("./index");

const BoardSchema = new Schema({
  title: {
    type: String,
    require: true
  },
<<<<<<< HEAD
  lists:[
    {
      type:Schema.Types.ObjectId,
      ref: "list"
    }
  ]
  ,
  // users: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "user"
  //   }
  // ]

=======
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "list"
    }
  ]
>>>>>>> 1e61388336efb93e75b01a91dbde2fc351cafb1b
});

BoardSchema.statics.addList = (boardId, listId) => {
  const Board = mongoose.model("board");
  const List = mongoose.model("list");

  return Board.findById(boardId).then(board => {
    return List.findById(listId).then(list => {
      board.lists.push(list);
      list.board = board;
      return Promise.all([board.save(), list.save()]).then(
        ([board, list]) => board.lists
      );
    })
  })
}

module.exports = mongoose.model("board", BoardSchema);