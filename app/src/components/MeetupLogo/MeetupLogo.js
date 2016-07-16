import React from 'react';
import LogoSRC from './Meetup_Logo.png';
import styles from './MeetupLogo.module.scss';
import cssModules from 'react-css-modules';

const MeetupLogo = () => (
  <img
    src={LogoSRC}
    alt="Meetup Logo"
    className={styles.smallLogo}
  />
);

export default cssModules(MeetupLogo, styles);
