const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type TimeMark {
		_id: ID!
		title: String!
		day: Int!
		month: Int!
		year: Int!
		time: String!
		tasksCount: Int!
	}

	type Task {
		_id: ID!
		title: String!
		completed: Boolean!
		timeMark: TimeMark!
	}
	      
	type TimeMarksCount {
		day: Int!
		count: Int!
	}

	type Query {
		monthTimeMarks(month: Int, year: Int): [TimeMarksCount]
		timeMarks(day: Int, month: Int, year: Int): [TimeMark]
		timeMarkById(_id: ID): TimeMark
		tasks(timemarkId: ID): [Task]
		taskById(_id: ID): Task
		# completeTask(taskId: ID, completed: Boolean): Task
		
	}

	type Mutation {
		addTask(title: String, timeMark: ID): Task
		completeTask(taskId: ID): Task
		updateTask(taskId: ID, title: String): Task

		updateTimeMark(timeMarkId: ID, title: String, time: String): TimeMark
	}
`;

module.exports = typeDefs;





// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
// 	type Task {
// 		_id: ID!
// 		title: String!
// 		completed: Boolean!
// 	}
	      
// 	type Query {
// 		tasks: [Task]
// 	}
// `;

// module.exports = typeDefs;