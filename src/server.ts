import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { RedisCache } from 'apollo-server-cache-redis';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { context } from './context';

async function createServer() {
  const port = process.env.PORT || 3001;
  const app = express();
  const graphqlPath = '/graphql';
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({
    schema,
    context,
    plugins: [responseCachePlugin()],
    cacheControl: {
      defaultMaxAge: 30,
    },
    cache: new RedisCache({
      port: Number.parseInt(process.env.REDIS_PORT || '6379', 10),
      host: process.env.REDIS_HOST || '127.0.0.1',
      family: 4,
      db: process.env.REDIS_DB || 0,
    }),
  });

  server.applyMiddleware({ app, path: graphqlPath });

  return app.listen(port, () => {
    console.log(`Apollo server is listening on http://localhost:${port}${graphqlPath}`);
  });
}

export { createServer };
