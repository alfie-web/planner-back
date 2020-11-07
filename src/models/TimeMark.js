const { Schema, model } = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	// tasks: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Task'
	// }]
}, {
	timestamps: true
});

module.exports = model('TimeMark', schema);