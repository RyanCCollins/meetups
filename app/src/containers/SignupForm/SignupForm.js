import React, { Component, PropTypes } from 'react';
import {
  Button,
  Row,
  Column
} from 'react-foundation';
import styles from './SignupForm.module.scss';
import { reduxForm } from 'redux-form';
import {
  FaCog,
  FaPaperPlane,
  FaExclamationTriangle
} from 'react-icons/lib/fa';
import validation from './signupValidation';

export const fields = [
  'fullname',
  'email',
  'password'
];

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(formData) {
    console.log(`Form data submit: ${formData}`)
  }
  render() {
    const {
      fields: { fullname, email, password },
      resetForm,
      handleSubmit,
      submitting,
      onSubmit
    } = this.props;
    return (
      <div className={styles.container}>
        <Row>
          <Column
            small={12}
            medium={6}
            large={6}
            className={styles.formContainer}
            isColumn
            centerOnSmall
          >
            <form onSubmit={() => handleSubmit(onSubmit)}>
              <label>Fullname</label>
              <div>
                <input
                  {...fullname}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                ></input>
              {fullname.touched &&
                fullname.error &&
                  <span className="error">
                    {fullname.error}
                  </span>
              }
              </div>
              <div>
                <label>Email</label>
                <input
                  {...email}
                  type="text"
                  name="email"
                  placeholder="Email Address"
                ></input>
                {email.touched &&
                  email.error &&
                    <span className="error">
                      {email.error}
                    </span>
                }
              </div>
              <div>
                <label>Password</label>
                <input
                  {...password}
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
                {password.touched &&
                  password.error &&
                    <span className="error">
                      {password.error}
                    </span>
                }
              </div>
              <div className={styles.buttonGroup}>
                <Button
                  className={styles.marginRight}
                  size={'large'}
                  disabled={submitting}
                >
                  {submitting ?
                    <FaCog className="fa-spin" />
                  :
                    <FaPaperPlane />
                  }{' Submit'}
                </Button>
                <Button isHollow size={'large'} disabled={submitting} onClick={resetForm}>
                  Clear Form
                </Button>
              </div>
            </form>
          </Column>
        </Row>
      </div>
    );
  }
}

SignupForm.propTypes = {
  asyncValidating: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'signupForm',
  fields,
  validation
})(SignupForm);
