import express, { Request, Response, NextFunction } from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers/index.resolvers';
import typeDefs from './typeDefs/typeDefs';
import { WithAuth } from './guards/AuthGuard';
import { port } from './constants';
import dbConnection from './repos/database';


const app = express();

app.use(WithAuth)

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }: any) => {
    const user = req.user || null
    return { user }
  }
})

async function serverStart(server) {
  await server.start()
  server.applyMiddleware({ app })
}

serverStart(server)


dbConnection.on('error', (error) => {
  console.error('💀 MongoDB connection error:', error);
});

dbConnection.once('open', () => {
  console.log('✅ Connected to MongoDB database');
});

app.listen(port,() => {
  console.log(`🚀 Server is up and running on port! 🌐🎉 Let the magic begin! 🪄✨\nhttp://localhost:${port}/graphql`)
})
