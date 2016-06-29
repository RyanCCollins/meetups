import React, { PropTypes } from 'react';
import styles from './FormFooter.module.scss';
import { Link } from 'react-router';
import {
  Row,
  Column
} from 'react-foundation';

const FormFooter = ({
  url,
  text
}) => (
  <Row>
    <Column isColumn large={6} mediun={6} small={12} centerOnSmall>
      <div className={styles.wrapper}>
        <p className={styles.text}>Already have an account?
          <Link to={url}>
            {text}
          </Link>
        </p>
      </div>
    </Column>
  </Row>
);

FormFooter.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FormFooter;
