const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 16
  },
  board:{
    type: Schema.Types.ObjectId,
    ref: "board"
  }
})

UserSchema.static.updateUserBoard = (userId, boardId) =>{
  const User = mongoose.model("user");
  const Board = mongoose.model("board");


  return Product.findById(userId).then(user => {
    if (user.board) {
      Board.findById(user.board).then(oldBoard => {
        oldBoard.users.pull(user);
        return oldBoard.save();
      });
    }
    return Board.findById(boardId).then(newBoard => {
      user.board = newBoard;
      newBoard.users.push(user);

      return Promise.all([user.save(), newBoard.save()]).then(
        ([user, newBoard]) => user
      );
    });
  });
};

module.exports = mongoose.model("user", UserSchema);