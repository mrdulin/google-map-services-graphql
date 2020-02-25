import { Client } from '@googlemaps/google-maps-services-js';
import './env';
const client = new Client({});

function context(): AppContext {
  return {
    client,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY || '',
  };
}

interface AppContext {
  client: Client;
  GOOGLE_MAP_API_KEY: string;
}

export { context, AppContext };
