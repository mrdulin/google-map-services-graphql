import { RedisCache } from 'apollo-server-cache-redis';
import './env';

const cache = new RedisCache({
  port: Number.parseInt(process.env.REDIS_PORT || '6379', 10),
  host: process.env.REDIS_HOST || '127.0.0.1',
  family: 4,
  db: process.env.REDIS_DB || 0,
});

export { cache };
