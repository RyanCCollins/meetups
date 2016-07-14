import React, { PropTypes } from 'react';
import { MdAdd } from 'react-icons/lib/md';
import styles from './GuestListInput.module.scss';
import cssModules from 'react-css-modules';
import { FormInputError } from 'components';
import { inputHasError } from '../../utils/misc';

class GuestListInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      guestToBeAdded: ''
    };
  }
  handleKeyPress(e) {
    if (e.key.toLowerCase() == 'enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  }
  render() {
    const {
      field
    } = this.props;
    return (
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="guest-input">Guests</label>
          <div className={styles.floatingButton}>
            <input
              {...field}
              ref="guestInput"
              onKeyPress={this.handleKeyPress}
              id="guest-input"
              type="text"
              placeholder="Start typing to add guests"
            />
            <MdAdd
              className={styles.addButton}
              onClick={this.handleSubmit}
            />
          </div>
        </div>
        {inputHasError(field) &&
          <FormInputError input={field} />
        }
      </div>
    );
  }
}

GuestListInput.propTypes = {
  onAddGuest: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired
};

export default cssModules(GuestListInput, styles);
