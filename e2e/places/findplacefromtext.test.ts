import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from '../util';
import { gql } from 'apollo-server';
import { PlaceInputType } from '@googlemaps/google-maps-services-js/dist/common';

const FIND_PLACE_FROM_TEXT = gql`
  query findplacefromtext($params: FindPlaceFromTextRequestParams) {
    findPlaceFromText(params: $params) {
      candidates {
        formatted_address
      }
    }
  }
`;

describe('findplacefromtext', () => {
  it('should find place from text', async () => {
    const server = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({
      query: FIND_PLACE_FROM_TEXT,
      variables: {
        params: {
          input: 'Museum of Modern Art',
          inputtype: PlaceInputType.textQuery,
          fields: ['place_id', 'name', 'formatted_address'],
        },
      },
    });
    console.log(res.data!.findPlaceFromText);
  });
});
