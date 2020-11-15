const { Task, TimeMark } = require('../models');

const countTimeMarksInDay = require('../helpers/countTimeMarksInDay');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		tasks(parent, args) {
			return Task.find({ timeMark: args.timemarkId}).sort({ createdAt: 1 })
		},

		completeTask(parent, { taskId, completed }) {
			return Task.findOneAndUpdate({ _id: taskId }, { completed })
		},



		monthTimeMarks(parent, { month, year }) {
			console.log(month, year)

			return TimeMark.find({ month, year }).exec().then(timeMarks => {
				const res = countTimeMarksInDay(timeMarks)

				return res
			})
		},

		timeMarks(parent, { day, month, year }) {
			return TimeMark.find({ day, month, year })
		}


	},
};

module.exports = resolvers;