const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: {
    type:String,
    required: true,
    unique: true
  },
  users:[
    {
      type:Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  lists:[
    {
      type:Schema.Types.ObjectId,
      ref: "list"
    }
  ]

});

module.exports = mongoose.model("board", BoardSchema);