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
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formData) {
    console.log(`Handle submit: ${formData}`)
  }
  render() {
    return (
      <div className={styles.container}>
        <SectionHeader
          className={styles.blue}
          header="Sign Up Now"
        />
        <SignupForm
          onSubmit={this.handleSubmit}
          {...this.props}
        />
      </div>
    );
  }
}

Signup.propTypes = {

};

const mapStateToProps = (state) => ({

})

export default Signup;
