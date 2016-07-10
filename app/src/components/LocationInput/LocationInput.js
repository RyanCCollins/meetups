import React, { PropTypes } from 'react';
import GeoSuggest from 'react-geosuggest';
import { FormInputError } from 'components';
import { inputHasError } from '../../utils/misc';

const LocationInput = ({
  locationInput,
  locationLatInput,
  locationLongInput,
  onSuggestSelect
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label htmlFor="location-input">Location</label>
      <GeoSuggest
        placeholder="Start typing to select an event location"
        country="USA"
        value={locationInput.value}
        id="location-input"
        aria-invalde={locationInput.error}
        onSuggestSelect={onSuggestSelect}
      />
      <input {...locationLatInput} type="hidden" value={locationLatInput.value} />
      <input {...locationLongInput} type="hidden" value={locationLongInput.value} />
    </div>
    {inputHasError(locationInput) &&
      <FormInputError input={locationInput} />
    }
  </div>
);

LocationInput.propTypes = {
  locationInput: PropTypes.object.isRequired,
  locationLongInput: PropTypes.object.isRequired,
  locationLatInput: PropTypes.object.isRequired,
  onSuggestSelect: PropTypes.func.isRequired
};

export default LocationInput;
