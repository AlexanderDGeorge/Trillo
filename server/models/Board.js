const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: {
    type:String,
    required: true,
    unique: true
  },
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

});

// BoardSchema.static.findUsers = function(boardId){
//   return this.findById(boardId)
//    .populate("users")
//    .then(board => board.users);
// }

// BoardSchema.static.findLists = function (boardId) {
//   return this.findById(boardId)
//     .populate("lists")
//     .then(board => board.lists);
// }


module.exports = mongoose.model("board", BoardSchema);