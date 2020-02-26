import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type AddressComponent = {
   __typename?: 'AddressComponent',
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
  long_name?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
};

export type AddressGeometry = {
   __typename?: 'AddressGeometry',
  location?: Maybe<LatLngLiteral>,
  location_type?: Maybe<LocationType>,
  viewport?: Maybe<LatLngBounds>,
  bounds?: Maybe<LatLngBounds>,
};

export enum AddressType {
  StreetAddress = 'street_address',
  Route = 'route',
  Intersection = 'intersection',
  Political = 'political',
  Country = 'country',
  AdministrativeAreaLevel_1 = 'administrative_area_level_1',
  AdministrativeAreaLevel_2 = 'administrative_area_level_2',
  AdministrativeAreaLevel_3 = 'administrative_area_level_3',
  AdministrativeAreaLevel_4 = 'administrative_area_level_4',
  AdministrativeAreaLevel_5 = 'administrative_area_level_5',
  ColloquialArea = 'colloquial_area',
  Locality = 'locality',
  Ward = 'ward',
  Sublocality = 'sublocality',
  Neighborhood = 'neighborhood',
  Premise = 'premise',
  Subpremise = 'subpremise',
  PostalCode = 'postal_code',
  NaturalFeature = 'natural_feature',
  Airport = 'airport',
  Park = 'park',
  PointOfInterest = 'point_of_interest'
}

export type AspectRating = {
   __typename?: 'AspectRating',
  type?: Maybe<AspectRatingType>,
  rating?: Maybe<Scalars['Int']>,
};

export enum AspectRatingType {
  Appeal = 'appeal',
  Atmosphere = 'atmosphere',
  Decor = 'decor',
  Facilities = 'facilities',
  Food = 'food',
  Overall = 'overall',
  Quality = 'quality',
  Service = 'service'
}

export type FindPlaceFromTextRequestParams = {
  input?: Maybe<Scalars['String']>,
  inputtype?: Maybe<PlaceInputType>,
  language?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<Maybe<Scalars['String']>>>,
  locationbias?: Maybe<Scalars['String']>,
};

export type FindPlaceFromTextResponseData = {
   __typename?: 'FindPlaceFromTextResponseData',
  candidates?: Maybe<Array<Maybe<Place>>>,
};

export type GeocodeComponents = {
  postal_code?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  route?: Maybe<Scalars['String']>,
  locality?: Maybe<Scalars['String']>,
  administrative_area?: Maybe<Scalars['String']>,
};

export type GeocodeRequestParams = {
  address?: Maybe<Scalars['String']>,
  bounds?: Maybe<LatLngBoundsInput>,
  language?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  components?: Maybe<GeocodeComponents>,
};

export type GeocodeResponseData = {
   __typename?: 'GeocodeResponseData',
  results?: Maybe<Array<Maybe<GeocodeResult>>>,
};

export type GeocodeResult = {
   __typename?: 'GeocodeResult',
  types?: Maybe<Array<Maybe<AddressType>>>,
  formatted_address?: Maybe<Scalars['String']>,
  address_components?: Maybe<Array<Maybe<AddressComponent>>>,
  postcode_localities?: Maybe<Array<Maybe<Scalars['String']>>>,
  geometry?: Maybe<AddressGeometry>,
  plus_code?: Maybe<PlusCode>,
  partial_match?: Maybe<Scalars['Boolean']>,
  place_id?: Maybe<Scalars['String']>,
};

export enum GeocodingAddressComponentType {
  Floor = 'floor',
  Establishment = 'establishment',
  PointOfInterest = 'point_of_interest',
  Parking = 'parking',
  PostBox = 'post_box',
  PostalTown = 'postal_town',
  Room = 'room',
  StreetNumber = 'street_number',
  BusStation = 'bus_station',
  TrainStation = 'train_station',
  TransitStation = 'transit_station'
}

export enum Language {
  En = 'en'
}

export type LatLngBounds = {
   __typename?: 'LatLngBounds',
  northeast?: Maybe<LatLngLiteral>,
  southwest?: Maybe<LatLngLiteral>,
};

export type LatLngBoundsInput = {
  northeast?: Maybe<LatLngLiteralInput>,
  southwest?: Maybe<LatLngLiteralInput>,
};

export type LatLngLiteral = {
   __typename?: 'LatLngLiteral',
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
};

export type LatLngLiteralInput = {
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
};

export enum LocationType {
  Rooftop = 'ROOFTOP',
  RangeInterpolated = 'RANGE_INTERPOLATED',
  GeometricCenter = 'GEOMETRIC_CENTER',
  Approximate = 'APPROXIMATE'
}

export type OpeningHours = {
   __typename?: 'OpeningHours',
  open_now?: Maybe<Scalars['Boolean']>,
  periods?: Maybe<Array<Maybe<OpeningPeriod>>>,
  weekday_text?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type OpeningHoursTime = {
   __typename?: 'OpeningHoursTime',
  day?: Maybe<Scalars['Int']>,
  time?: Maybe<Scalars['String']>,
};

export type OpeningPeriod = {
   __typename?: 'OpeningPeriod',
  open?: Maybe<OpeningHoursTime>,
  close?: Maybe<OpeningHoursTime>,
};

export type Place = {
   __typename?: 'Place',
  address_components?: Maybe<Array<Maybe<AddressComponent>>>,
  formatted_address?: Maybe<Scalars['String']>,
  formatted_phone_number?: Maybe<Scalars['String']>,
  adr_address?: Maybe<Scalars['String']>,
  geometry?: Maybe<AddressGeometry>,
  plus_code?: Maybe<PlusCode>,
  icon?: Maybe<Scalars['String']>,
  international_phone_number?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  opening_hours?: Maybe<OpeningHours>,
  permanently_closed?: Maybe<Scalars['Boolean']>,
  photos?: Maybe<Array<Maybe<PlacePhoto>>>,
  place_id?: Maybe<Scalars['String']>,
  price_level?: Maybe<Scalars['Int']>,
  rating?: Maybe<Scalars['Int']>,
  reviews?: Maybe<Array<Maybe<PlaceReview>>>,
  types?: Maybe<Array<Maybe<AddressType>>>,
  url?: Maybe<Scalars['String']>,
  utc_offset?: Maybe<Scalars['Int']>,
  vicinity?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};

export enum PlaceInputType {
  Textquery = 'textquery',
  Phonenumber = 'phonenumber'
}

export type PlacePhoto = {
   __typename?: 'PlacePhoto',
  photoreference?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  html_attributions?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PlaceQueryAutocompleteRequestParams = {
  input: Scalars['String'],
  offset?: Maybe<Scalars['Int']>,
  location?: Maybe<Scalars['String']>,
  radius?: Maybe<Scalars['Int']>,
  language?: Maybe<Scalars['String']>,
};

export type PlaceQueryAutocompleteResponseData = {
   __typename?: 'PlaceQueryAutocompleteResponseData',
  predictions?: Maybe<Array<Maybe<Place>>>,
};

export type PlaceReview = {
   __typename?: 'PlaceReview',
  aspects?: Maybe<Array<Maybe<AspectRating>>>,
  author_name?: Maybe<Scalars['String']>,
  author_url?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  time?: Maybe<Scalars['String']>,
};

export type PlusCode = {
   __typename?: 'PlusCode',
  global_code?: Maybe<Scalars['String']>,
  compound_code?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  findPlaceFromText?: Maybe<FindPlaceFromTextResponseData>,
  placeQueryAutocomplete?: Maybe<PlaceQueryAutocompleteResponseData>,
  geocode?: Maybe<GeocodeResponseData>,
  reverseGeocode?: Maybe<ReverseGeocodeResponseData>,
};


export type QueryFindPlaceFromTextArgs = {
  params?: Maybe<FindPlaceFromTextRequestParams>
};


export type QueryPlaceQueryAutocompleteArgs = {
  params?: Maybe<PlaceQueryAutocompleteRequestParams>
};


export type QueryGeocodeArgs = {
  params?: Maybe<GeocodeRequestParams>
};


export type QueryReverseGeocodeArgs = {
  params?: Maybe<ReverseGeocodeRequestParams>
};

export type ReverseGeocodeRequestParams = {
  latlng?: Maybe<LatLngLiteralInput>,
  place_id?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  result_type?: Maybe<Array<Maybe<AddressType>>>,
  location_type?: Maybe<Array<Maybe<ReverseGeocodingLocationType>>>,
};

export type ReverseGeocodeResponseData = {
   __typename?: 'ReverseGeocodeResponseData',
  results?: Maybe<Array<Maybe<GeocodeResult>>>,
};

export enum ReverseGeocodingLocationType {
  Rooftop = 'ROOFTOP',
  RangeInterpolated = 'RANGE_INTERPOLATED',
  GeometricCenter = 'GEOMETRIC_CENTER',
  Approximate = 'APPROXIMATE'
}


