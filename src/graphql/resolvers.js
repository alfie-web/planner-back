const { Task, TimeMark } = require('../models');

const countTimeMarksInDay = require('../helpers/countTimeMarksInDay');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		tasks(parent, args) {
			return Task.find({ timeMark: args.timemarkId}).sort({ createdAt: 1 })
		},

		taskById(parent, { _id }) {
			return Task.findById(_id);
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
		},

		timeMarkById(parent, { _id }) {
			return TimeMark.findById(_id)
		}
	},
	Mutation: {
		addTask: async (parent, { title, timeMark }) => {
			const findedTimeMark = await TimeMark.findOne({ _id: timeMark })

			if (findedTimeMark) {
				const newTask = new Task({ title, timeMark });

				findedTimeMark.tasksCount += 1;
				await findedTimeMark.save()

				return newTask.save()
			}

			// TimeMark.findOne({ _id: timeMark }).exec()
			// 	.then(findedTimeMark => {
			// 		const newTask = new Task({ title, timeMark });
			// 		findedTimeMark.tasksCount += 1;
			// 		findedTimeMark.save()
			// 		return newTask.save()
			// 	})
		},	

		completeTask(parent, { taskId }) {
			return Task.findOne({ _id: taskId }).then(findedTask => {
				findedTask.completed = !findedTask.completed
				return findedTask.save()
			})
			// return Task.findOneAndUpdate({ _id: taskId }, { completed })
		},

		updateTask(parent, { taskId, title }) {
			return Task.findOne({ _id: taskId }).then(findedTask => {
				findedTask.title = title
				return findedTask.save()
			})
			// return Task.findOneAndUpdate({ _id: taskId }, { completed })
		},
	}
};

module.exports = resolvers;