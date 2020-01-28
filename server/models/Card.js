const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	list: {
		type: Schema.Types.ObjectId,
		ref: "list"
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "comment"
		}
	]
})



module.exports = mongoose.model("card", CardSchema);