import React, { PropTypes } from 'react';
import GeoSuggest from 'react-geosuggest';

const LocationInput = ({
  meetup,
  onSuggestSelect
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label htmlFor="location-input">Location</label>
      <GeoSuggest
        placeholder="Start typing to select an event location"
        country="USA"
        location={meetup.lat && meetup.lng && new google.maps.LatLng(meetup.lat, meetup.lng)}
        id="location-input"
        onSuggestSelect={onSuggestSelect}
      />
    </div>
  </div>
);

LocationInput.propTypes = {
  meetup: PropTypes.object,
  onSuggestSelect: PropTypes.func.isRequired
};

export default LocationInput;
