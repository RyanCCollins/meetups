import React, { Component, PropTypes } from 'react';
import {
  Button,
  Row,
  Column
} from 'react-foundation';
import styles from './SignupForm.module.scss';
import { reduxForm } from 'redux-form'
import {
  FaCog,
  FaPaperPlane,
  FaExclamationTriangle
} from 'react-icons/lib/fa';

export const fields = [
  'fullname',
  'email',
  'password'
];

const validatePassword = (password) => {
  const passwordREString = "(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)";
  const passwordRE = new RegExp(passwordREString);
  return passwordRE.test(password);
};

const validateFullname = (fullname) => {
  const fullnameREString = "^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$";
  const fullnameRE = new RegExp(fullnameREString);
  return fullnameRE.test(fullname)
};

const validateEmail = (email) => {
  const emailREString = `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;`
  const emailRE = new RegExp(emailREString);
  return emailRE.test(email);
};

const validate = (values) => {
  const errors = {};
  errors.fullname = validateFullname(values.fullname) ? null : 'Fullname required'
  errors.password = validatePassword(values.password) ? null :
    'Password must contain at least: 1 digit, 1 lower, 1 upper and 8 characters total.'
  errors.email = validateEmail(values.email) ? null : 'Please enter a valid email address.'
};

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
            <form onSubmit={handleSubmit(this.onSubmit)}>
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
  validate
})(SignupForm);
