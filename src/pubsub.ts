import './env';
import { PubSub, Message } from '@google-cloud/pubsub';

async function messageHandler(message: Message): Promise<void> {
  console.log(`Received message ${message.id}:`);
  console.log(`\tData: ${message.data}`);
  console.log(`\tAttributes: ${message.attributes}`);

  message.ack();
}

async function subscribeEvents(): Promise<void> {
  const topicName = 'google-map';
  const subName = 'google-map';
  const pubsub = new PubSub({ projectId: process.env.PROJECT_ID });
  const [topic] = await pubsub.createTopic(topicName);
  console.log(`Topic ${topic.name} created.`);

  const subscription = topic.subscription(subName);
  subscription.on('message', messageHandler);
}

export { subscribeEvents, messageHandler };
