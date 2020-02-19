import { gql } from 'apollo-server-express';

const typeDefs = gql`
  enum AddressType {
    street_address
    route
    intersection
    political
    country
    administrative_area_level_1
    administrative_area_level_2
    administrative_area_level_3
    administrative_area_level_4
    administrative_area_level_5
    colloquial_area
    locality
    ward
    sublocality
    neighborhood
    premise
    subpremise
    postal_code
    natural_feature
    airport
    park
    point_of_interest
  }
  enum AspectRatingType {
    appeal
    atmosphere
    decor
    facilities
    food
    overall
    quality
    service
  }
  type AspectRating {
    type: AspectRatingType
    rating: Int
  }
  type PlaceReview {
    aspects: [AspectRating]
    author_name: String
    author_url: String
    language: String
    rating: Int
    text: String
    time: String
  }
  type PlacePhoto {
    photoreference: String
    height: Int
    width: Int
    html_attributions: [String]
  }
  type OpeningHoursTime {
    day: Int
    time: String
  }
  type OpeningPeriod {
    open: OpeningHoursTime
    close: OpeningHoursTime
  }
  type OpeningHours {
    open_now: Boolean
    periods: [OpeningPeriod]
    weekday_text: [String]
  }
  type PlusCode {
    global_code: String
    compound_code: String
  }
  type LatLngLiteral {
    lat: Int
    lng: Int
  }
  type LatLngBounds {
    northeast: LatLngLiteral
    southwest: LatLngBounds
  }
  enum LocationType {
    ROOFTOP
    RANGE_INTERPOLATED
    GEOMETRIC_CENTER
    APPROXIMATE
  }
  type AddressGeometry {
    location: LatLngLiteral
    location_type: LocationType
    viewport: LatLngBounds
    bounds: LatLngBounds
  }
  enum GeocodingAddressComponentType {
    floor
    establishment
    point_of_interest
    parking
    post_box
    postal_town
    room
    street_number
    bus_station
    train_station
    transit_station
  }
  #union Types = AddressType | GeocodingAddressComponentType
  type AddressComponent {
    # TODO: Change to enum
    types: [String]
    long_name: String
    short_name: String
  }
  type Place {
    address_components: [AddressComponent]
    formatted_address: String
    formatted_phone_number: String
    adr_address: String
    geometry: AddressGeometry
    plus_code: PlusCode
    icon: String
    international_phone_number: String
    name: String
    opening_hours: OpeningHours
    permanently_closed: Boolean
    photos: [PlacePhoto]
    place_id: String
    price_level: Int
    rating: Int
    reviews: [PlaceReview]
    types: [AddressType]
    url: String
    utc_offset: Int
    vicinity: String
    website: String
  }
  type FindPlaceFromTextResponseData {
    candidates: [Place]
  }
  enum PlaceInputType {
    textquery
    phonenumber
  }
  enum Language {
    en
    # zh-CN
    # more
  }
  input FindPlaceFromTextRequestParams {
    input: String
    inputtype: PlaceInputType
    # TODO: Change to enum
    language: String
    fields: [String]
    locationbias: String
  }
  type Query {
    findPlaceFromText(params: FindPlaceFromTextRequestParams): FindPlaceFromTextResponseData
  }
`;

export { typeDefs };
