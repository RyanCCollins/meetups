import React, { PropTypes } from 'react';
import GeoSuggest from 'react-geosuggest';

const LocationInput = ({
  meetupLocation,
  onSuggestSelect
}) => (
  <div className="form-group">
    <label htmlFor="location-input">Location</label>
    <GeoSuggest
      placeholder="Start typing to select an event location"
      country="USA"
      onSuggestSelect={onSuggestSelect}
    />
  </div>
);

LocationInput.propTypes = {
  meetupLocation: PropTypes.object,
  onSuggestSelect: PropTypes.func.isRequired
};

export default LocationInput;
