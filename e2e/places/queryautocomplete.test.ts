import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from '../util';
import { gql } from 'apollo-server';

const PLACE_QUERY_AUTOCOMPLETE = gql`
  query placeQueryAutocomplete($params: PlaceQueryAutocompleteRequestParams) {
    placeQueryAutocomplete(params: $params) {
      predictions {
        name
        place_id
      }
    }
  }
`;

describe('placeQueryAutocomplete', () => {
  it('should query place autocomplete', async () => {
    const server = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({
      query: PLACE_QUERY_AUTOCOMPLETE,
      variables: {
        params: {
          input: 'Seattle',
        },
      },
    });
    console.log(res.data!.placeQueryAutocomplete);
    expect(res.data!.placeQueryAutocomplete.predictions.length).toBeTruthy();
  });
});
