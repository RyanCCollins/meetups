import React, { PropTypes } from 'react';
import { MdMic, MdMicOff } from 'react-icons/lib/md';
import styles from './SpeechButton.module.scss';
import cssModules from 'react-css-modules';

const SpeechButton = ({
  isOn,
  onClick
}) => (
  <button className={styles.button} onClick={onClick}>
    {isOn ?
      <MdMicOff className="animate-flicker red" />
    :
      <MdMic />
    }
  </button>
);

SpeechButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default cssModules(SpeechButton, styles);
