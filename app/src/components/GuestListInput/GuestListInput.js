import React, { PropTypes } from 'react';
import { MdAdd } from 'react-icons/lib/md';
import styles from './GuestListInput.module.scss';
import cssModules from 'react-css-modules';

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
      this.handleSubmit()
    }
  }
  handleAddingGuest(e) {
    e.preventDefault();
    const guestToBeAdded = e.target.value;
    return guestToBeAdded.length > 0 ?
      this.setState({ guestToBeAdded }) :
      undefined;
  }
  handleSubmit() {
    const {
      onAddGuest
    } = this.props;
    const {
      guestToBeAdded
    } = this.state;
    if (guestToBeAdded !== null) {
      this.setState({ guestToBeAdded: '' });
      onAddGuest(guestToBeAdded);
    }
  }
  render() {
    const {
      guestToBeAdded
    } = this.state;
    return (
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="guest-input">Guests</label>
          <div className={styles.floatingButton}>
            <input
              ref="guestInput"
              onKeyPress={this.handleKeyPress}
              onChange={this.handleAddingGuest}
              value={guestToBeAdded}
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
      </div>
    );
  }
}

GuestListInput.propTypes = {
  onAddGuest: PropTypes.func.isRequired,
  guestsInput: PropTypes.object.isRequired
};

export default cssModules(GuestListInput, styles);
