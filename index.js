// cofig
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import { ApolloServer } from 'apollo-server-express';

// middleware
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';

// resolvers
import { Query } from './src/graphql/resolvers/Query.js';
import { Mutation } from './src/graphql/resolvers/Mutation.js';

// type defs
import { kidsTypeDef } from './src/graphql/types/kids.js';
import { organizationTypeDef } from './src/graphql/types/organizations.js';

// db connection
import { dbConnection } from './src/db/connection.js';
dbConnection();

// connect to the server
const startServer = async () => {
   // apply the type defs and resolver as middleware to the server
   const schema = applyMiddleware(
      makeExecutableSchema({
         typeDefs: [kidsTypeDef, organizationTypeDef],
         resolvers: {
            Query,
            Mutation,
         },
      })
      //  permissions
   );

   // set cors setting according to environment
   let corsSettings;

   if (process.env.NODE_ENV === 'PRODUCTION') {
      corsSettings = {
         origin: ['https://my.blbiescholar.app', 'https://studio.apollographql.com'],
         credentials: true,
      };
   } else {
      corsSettings = {
         origin: '*',
      };
   }

   const apolloServer = new ApolloServer({
      schema,
      csrfPrevention: true,
      context: {},
   });
   await apolloServer.start();

   apolloServer.applyMiddleware({ app, cors: corsSettings, path: '/api' });

   app.listen(4000, () => {
      console.log(`Successfully listening on port ${process.env.PORT}`);
   });
};

startServer();
