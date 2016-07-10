import React, { PropTypes } from 'react';
import { MdClear } from 'react-icons/lib/md';
import styles from './GuestsListItem.module.scss';
import cssModules from 'react-css-modules';

const GuestsListItem = ({
  guest,
  i,
  onDeleteGuest
}) => (
  <li key={i} className={styles.listWrapper}>
    <p className={styles.textWrapper}>{guest}</p>
    <MdClear className={styles.deleteButton} onClick={onDeleteGuest} />
  </li>
);

GuestsListItem.propTypes = {
  guest: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  onDeleteGuest: PropTypes.func.isRequired
};

export default cssModules(GuestsListItem, styles);
