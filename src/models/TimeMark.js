const { Schema, model } = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	day: {
		type: Number,
		required: true
	},
	month: {
		type: Number,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	tasksCount: {
		type: Number,
		required: true,
		default: 0
	},

	// date: {
	// 	type: Date,
	// 	required: true
	// },
	// tasks: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Task'
	// }]
}, {
	timestamps: true
});

module.exports = model('TimeMark', schema);