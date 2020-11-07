const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// const { Task } = require('./models');

require('dotenv').config();

const connectDB = require('./core/db');



const app = express();

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