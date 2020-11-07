const { Task } = require('../models');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		tasks(parent, args) {
			return Task.find({ timeMark: args.timemarkId})
		}

		// tasks() {	// получаю все таски
		// 	return Task.find({})
		// },
	},
};

module.exports = resolvers;