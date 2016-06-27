import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Button,
  Row,
  Column
} from 'react-foundation';
import styles from './SignupPage.module.scss';
import { SignupForm } from '../../containers';
import { SectionHeader } from '../../components';

class Signup extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SectionHeader
          className={styles.blue}
          header="Sign Up Now"
        />
        <SignupForm
          {...this.props}
        />
      </div>
    );
  }
}

Signup.propTypes = {

};

export default Signup;
