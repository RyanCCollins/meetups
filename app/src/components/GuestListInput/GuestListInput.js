import React, { PropTypes } from 'react';
import { MdAdd } from 'react-icons/lib/md';
import styles from './GuestListInput.module.scss';
import cssModules from 'react-css-modules';
import { FormInputError } from 'components';
import { inputHasError } from '../../utils/misc';

class GuestListInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddingGuest = this.handleAddingGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleAddingGuest(e) {
    const {
      guestsInput
    } = this.props;
    e.preventDefault();
    const guestToBeAdded = guestsInput.value;
    return guestToBeAdded.length > 0 ?
      this.setState({ guestToBeAdded }) :
      undefined;
  }
  handleSubmit() {
    const {
      onAddGuest
    } = this.props;
    const {
      guestsInput
    } = this.props;
    if (guestToBeAdded !== null) {
      this.setState({ guestToBeAdded: '' });
      onAddGuest(guestsInput.value);
    }
  }
  render() {
    const {
      guestsInput
    } = this.props;
    return (
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="guest-input">Guests</label>
          <div className={styles.floatingButton}>
            <input
              {...guestsInput}
              ref="guestInput"
              onKeyPress={this.handleKeyPress}
              onChange={this.handleAddingGuest}
              value={guestsInput.value}
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
        {inputHasError(guestsInput) &&
          <FormInputError input={guestsInput} />
        }
      </div>
    );
  }
}

GuestListInput.propTypes = {
  onAddGuest: PropTypes.func.isRequired,
  guestsInput: PropTypes.object.isRequired
};

export default cssModules(GuestListInput, styles);
