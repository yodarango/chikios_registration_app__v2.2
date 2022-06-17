// apollo
import { ApolloServer } from "apollo-server-express";

// resolvers
import { Query } from "./src/graphql/resolvers/Query";

// type defs
import { kidsTypteDef } from "./src/graphql/types/kids";

const server = new ApolloServer({
  typeDefs: [kidsTypteDef],
  resolvers: { Query },
});

await server.listen();
