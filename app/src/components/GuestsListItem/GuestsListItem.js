import React, { PropTypes } from 'react';
import { MdClear } from 'react-icons/lib/md';
import styles from './GuestsListItem.module.scss';
import cssModules from 'react-css-modules';

const GuestsListItem = ({
  guest,
  onDeleteGuest
}) => (
  <li className={styles.listWrapper}>
    <p className={styles.textWrapper}>{guest}</p>
    <MdClear className={styles.deleteButton} onClick={onDeleteGuest} />
  </li>
);

GuestsListItem.propTypes = {
  guest: PropTypes.string.isRequired,
  onDeleteGuest: PropTypes.func.isRequired
};

export default cssModules(GuestsListItem, styles);
