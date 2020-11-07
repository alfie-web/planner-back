const mongoose = require('mongoose');
// const { ApolloServer } = require('apollo-server-express');

// const typeDefs = require('../graphql/typeDefs');
// const resolvers = require('../graphql/resolvers');

const PORT = String(process.env.APP_PORT) || 8000;

const connectDB = (app) => {
	mongoose.connect('mongodb://localhost:27017/planner', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`)
		
		// const server = new ApolloServer({ typeDefs, resolvers });
		// server.applyMiddleware({ app });

	}))
	.catch( err => console.error(`Error connecting to mongodb://localhost:27017/planner`, err) )
}

module.exports = connectDB;