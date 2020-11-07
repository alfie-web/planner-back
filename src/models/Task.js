const { Schema, model } = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false,
		required: true
	},
	timeMark: {
		type: Schema.Types.ObjectId,
		ref: 'TimeMark'
	}
}, {
	timestamps: true
});

module.exports = model('Task', schema);