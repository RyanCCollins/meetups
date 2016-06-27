import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  header,
  subHeader
}) => (
  <section className={styles.sectionContainer}>
    <h1 className={styles.sectionHeader}>{header}</h1>
    <h4 className={styles.sectionSubheader}>{subHeader}</h4>
    <hr className="section-divider"></hr>
  </section>
);

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string
};

export default CSSModules(SectionHeader, styles);
