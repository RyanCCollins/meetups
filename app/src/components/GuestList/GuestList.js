import React, { PropTypes } from 'react';
import {
  MdAdd,
  MdClear
} from 'react-icons/lib/md';
import styles from './GuestList.module.scss';
import cssModules from 'react-css-modules';

const GuestList = ({
  guests
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label htmlFor="guest-input">Guests</label>
      <div className={styles.floatingButton}>
        <input id="guest-input" type="text" placeholder="Start typing to add guests" />
        <MdAdd className={styles.addButton} />
      </div>
    </div>
  </div>
);

export default cssModules(GuestList, styles);
