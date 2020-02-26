import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { context } from './context';
import http from 'http';
import { cache } from './cache';
import { schema } from './schema';

async function createServer(): Promise<http.Server> {
  const port = process.env.PORT || 3001;
  const app = express();
  const graphqlPath = '/graphql';

  const server = new ApolloServer({
    schema,
    context,
    plugins: [responseCachePlugin()],
    cacheControl: {
      defaultMaxAge: 30,
    },
    cache,
  });

  server.applyMiddleware({ app, path: graphqlPath });

  return app.listen(port, () => {
    console.log(`Apollo server is listening on http://localhost:${port}${graphqlPath}`);
  });
}

export { createServer };
