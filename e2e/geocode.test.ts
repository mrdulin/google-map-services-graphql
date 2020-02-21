import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from './util';
import { gql } from 'apollo-server';

const GEOCODE = gql`
  query geocode($params: GeocodeRequestParams) {
    geocode(params: $params) {
      results {
        formatted_address
        place_id
        postcode_localities
      }
    }
  }
`;

describe('geocode', () => {
  it('should geocode', async () => {
    const server = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({
      query: GEOCODE,
      variables: {
        params: {
          address: 'Seattle',
          components: { country: 'us' },
          bounds: {
            northeast: { lat: 50, lng: -110 },
            southwest: { lat: 35, lng: -130 },
          },
        },
      },
    });
    console.log(res.data!.geocode.results);
    expect(res.data!.geocode.results.length).toBeTruthy();
  });
});
