import { Client } from '@googlemaps/google-maps-services-js';
import './env';
const client = new Client({});

function context() {
  return {
    client,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  };
}

interface IAppContext {
  client: Client;
  GOOGLE_MAP_API_KEY: string;
}

export { context, IAppContext };
