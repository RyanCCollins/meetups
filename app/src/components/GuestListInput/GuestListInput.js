import React, { PropTypes } from 'react';
import { MdAdd } from 'react-icons/lib/md';
import styles from './GuestList.module.scss';
import cssModules from 'react-css-modules';

const GuestListInput = ({
  onAddGuest
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label htmlFor="guest-input">Guests</label>
      <div className={styles.floatingButton}>
        <input id="guest-input" type="text" placeholder="Start typing to add guests" />
        <MdAdd className={styles.addButton} onClick={onAddGuest} />
      </div>
    </div>
  </div>
);

GuestListInput.propTypes = {
  onAddGuest: PropTypes.func.isRequired
};

export default cssModules(GuestListInput, styles);
