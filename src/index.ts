import './env';
import { createServer } from './server';
import { subscribeEvents } from './pubsub';

(async function main(): Promise<void> {
  // await subscribeEvents();
  await createServer();
})();
