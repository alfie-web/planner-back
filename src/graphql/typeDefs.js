const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type TimeMark {
		_id: ID!
		title: String!
		date: String!
	}

	type Task {
		_id: ID!
		title: String!
		completed: Boolean!
		timeMark: TimeMark!
	}
	      
	type Query {
		tasks(timemarkId: ID): [Task]
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