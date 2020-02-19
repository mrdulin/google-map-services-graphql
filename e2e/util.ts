import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../src/typeDefs';
import { resolvers } from '../src/resolvers';
import { context } from '../src/context';

function constructTestServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });
  return server;
}

export { constructTestServer };
