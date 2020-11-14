const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

require('dotenv').config();

const connectDB = require('./core/db');

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}))

connectDB(app);

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });









// const timemark = new TimeMark({
// 	title: 'Test',
// 	date: new Date().toISOString(),
// 	tasks: ["5fa595015ca8e827705a9e22"]
// })

// timemark.save()

// console.log(timemark)