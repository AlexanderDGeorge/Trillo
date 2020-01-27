const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    cardtype: {
        type: String,
        required: true
    },
    board: {
        type: Schema.Types.ObjectId,
        required: true
    }

})

module.exports = mongoose.model("cards", CardSchema);