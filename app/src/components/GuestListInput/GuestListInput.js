import React, { PropTypes } from 'react';
import { MdAdd } from 'react-icons/lib/md';
import styles from './GuestListInput.module.scss';
import cssModules from 'react-css-modules';

class GuestListInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddingGuest = this.handleAddingGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAddingGuest(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      guestToBeAdded
    });
  }
  handleSubmit() {
    const {
      onAddGuest
    } = this.props;
    const {
      guestToBeAdded
    } = this.state;
    if (guestToBeAdded !== null) {
      onAddGuest(guestToBeAdded)
    }
  }
  render() {
    return (
      <div className="form-group">
        <div className="floating-label">
          <label htmlFor="guest-input">Guests</label>
          <div className={styles.floatingButton}>
            <input
              ref="guestInput"
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
  onAddGuest: PropTypes.func.isRequired
};

export default cssModules(GuestListInput, styles);
