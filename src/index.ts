import './env';
import { createServer } from './server';
import { subscribeEvents } from './pubsub';

(async function main() {
  await subscribeEvents();
  await createServer();
})();
