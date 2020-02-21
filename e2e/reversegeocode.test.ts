import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from './util';
import { gql } from 'apollo-server';

const REVERSE_GEOCODE = gql`
  query reverseGeocode($params: ReverseGeocodeRequestParams) {
    reverseGeocode(params: $params) {
      results {
        formatted_address
        place_id
        postcode_localities
      }
    }
  }
`;

describe('reverseGeocode', () => {
  it('should reverseGeocode', async () => {
    const server = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({
      query: REVERSE_GEOCODE,
      variables: {
        params: {
          latlng: {
            lat: 60.168997,
            lng: 24.9433353,
          },
        },
      },
    });
    console.log(res);
    expect(res.data!.reverseGeocode.results).toBeTruthy();
  });
});
