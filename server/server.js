const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
//I am setting the port to be either what is in the .env OR 5000 to make sure the .env is connected properly
//and the server runs on port 3000
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();
//connect to db
connectDB();

//set graphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' })
);
app.listen(port, () => console.log(`Server Started on port ${port}`));
