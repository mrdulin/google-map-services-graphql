import { IAppContext } from './context';
import {
  FindPlaceFromTextResponse,
  PlaceQueryAutocompleteResponse,
  GeocodeResponse,
  ReverseGeocodeResponse,
} from '@googlemaps/google-maps-services-js';

const resolvers = {
  Query: {
    findPlaceFromText: async (_, { params }, { client, GOOGLE_MAP_API_KEY }: IAppContext) => {
      params.key = GOOGLE_MAP_API_KEY;
      const res: FindPlaceFromTextResponse = await client.findPlaceFromText({ params });
      return res.data;
    },
    placeQueryAutocomplete: async (_, { params }, { client, GOOGLE_MAP_API_KEY }: IAppContext) => {
      params.key = GOOGLE_MAP_API_KEY;
      const res: PlaceQueryAutocompleteResponse = await client.placeQueryAutocomplete({ params });
      return res.data;
    },
    geocode: async (_, { params }, { client, GOOGLE_MAP_API_KEY }: IAppContext) => {
      params.key = GOOGLE_MAP_API_KEY;
      const res: GeocodeResponse = await client.geocode({ params });
      return res.data;
    },
    reverseGeocode: async (_, { params }, { client, GOOGLE_MAP_API_KEY }: IAppContext) => {
      params.key = GOOGLE_MAP_API_KEY;
      console.log(params);
      const res: ReverseGeocodeResponse = await client.reverseGeocode({ params });
      return res.data;
    },
  },
};

export { resolvers };
