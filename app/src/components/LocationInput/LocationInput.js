import React, { PropTypes } from 'react';
import GeoSuggest from 'react-geosuggest';
import { FormInputError } from 'components';
import { inputHasError } from '../../utils/misc';

const LocationInput = ({
  field,
  onSuggestSelect
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label htmlFor="location-input">Location</label>
      <GeoSuggest
        placeholder="Start typing to select an event location"
        country="USA"
        value={field.value}
        id="location-input"
        aria-invalde={field.error}
        onSuggestSelect={onSuggestSelect}
      />
    </div>
    {inputHasError(field) &&
      <FormInputError input={field} />
    }
  </div>
);

LocationInput.propTypes = {
  onSuggestSelect: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired
};

export default LocationInput;
