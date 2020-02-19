import { IAppContext } from './context';
import { FindPlaceFromTextResponse } from '@googlemaps/google-maps-services-js';

const resolvers = {
  Query: {
    findPlaceFromText: async (_, { params }, { client, GOOGLE_MAP_API_KEY }: IAppContext) => {
      params.key = GOOGLE_MAP_API_KEY;
      console.log(params);
      const res: FindPlaceFromTextResponse = await client.findPlaceFromText({ params });
      return res.data;
    },
  },
};

export { resolvers };
