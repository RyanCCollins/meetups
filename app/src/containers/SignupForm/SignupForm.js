import React, { Component, PropTypes } from 'react';
import {
  Button,
  Row,
  Column
} from 'react-foundation';
import styles from './SignupForm.module.scss';
import CSSModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import {
  FaCog,
  FaPaperPlane,
  FaExclamationTriangle
} from 'react-icons/lib/fa';
import validation from './signupValidation';
import Popover from 'react-popover';
import { Link } from 'react-router';

export const fields = [
  'fullnameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput'
];

const PasswordHint = () => (
  <div className={styles.popoverBody}>
    <strong>Password Must meet to following criteria:</strong>
    <ul className="no-bullet">
      <li className={styles.red}>Must be at least 8 characters</li>
      <li className={styles.red}>Must contain at least 1 uppercase letter</li>
      <li className={styles.red}>Must contain at least 1 lowercase letter</li>
      <li className={styles.red}>Must contain at least 1 number</li>
    </ul>
  </div>
);

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.onHoverPassword = this.onHoverPassword.bind(this);
    this.onLeavePassword = this.onLeavePassword.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  onHoverPassword(e) {
    this.setState({
      popoverOpen: true
    });
  }
  onLeavePassword() {
    this.setState({
      popoverOpen: false
    });
  }
  submitForm(formData) {
    console.log(`Form data submit: ${formData}`)
  }
  render() {
    const {
      fields: {
        fullnameInput,
        emailInput,
        passwordInput,
        passwordConfirmationInput
      },
      resetForm,
      handleSubmit,
      submitting,
      onSubmit
    } = this.props;
    const {
      popoverOpen
    } = this.state;
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
            <form
              onSubmit={() => handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor="fullnameInput">Full Name</label>
                <input
                  {...fullnameInput}
                  type="text"
                  required
                  className={fullnameInput.error ? 'error': ''}
                  aria-invalid={fullnameInput.error}
                  id="fullnameInput"
                  name="name"
                  placeholder="Full Name"
                ></input>
              {fullnameInput.touched &&
                fullnameInput.error &&
                  <span className="error">
                    {fullnameInput.error}
                  </span>
              }
              </div>
              <div>
                <label htmlFor="emailInput">Email</label>
                <input
                  {...emailInput}
                  type="text"
                  className={emailInput.error ? 'error': ''}
                  aria-invalid={emailInput.error}
                  aria-required
                  aria-describedby="emailInputError"
                  name="email"
                  id="emailInput"
                  placeholder="Email Address"
                ></input>
                {emailInput.touched &&
                  emailInput.error &&
                  <div id="emailInputError">
                    <span className="error">
                      {emailInput.error}
                    </span>
                  </div>
                }
              </div>
              <div>
                <label htmlFor="passwordInput">Password</label>
                <Popover isOpen={popoverOpen} preferPlace={'right'} body={<PasswordHint />}>
                  <div></div>
                </Popover>
                <input
                  {...passwordInput}
                  type="password"
                  name="password"
                  className={passwordInput.error ? 'error': ''}
                  id="passwordInput"
                  aria-invalid={passwordInput.error}
                  placeholder="Password"
                  onMouseEnter={this.onHoverPassword}
                  onMouseLeave={this.onLeavePassword}
                ></input>
                {passwordInput.touched &&
                  passwordInput.error &&
                  <small className="form-error">
                    {passwordInput.error}
                  </small>
                }
              </div>
              <div>
                <label htmlFor="passwordConfirmationInput">Password Confirmation</label>
                <input
                  {...passwordConfirmationInput}
                  type="password"
                  aria-invalid={passwordConfirmationInput.error}
                  className={passwordConfirmationInput.error ? 'error': ''}
                  id="passwordConfirmationInput"
                  name="passwordConfirmationInput"
                  placeholder="Password Confirmation"
                ></input>
                {passwordConfirmationInput.touched &&
                  passwordConfirmationInput.error &&
                  <span className="error">
                    {passwordConfirmationInput.error}
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
        <Row>
          <Column isColumn large={4} small={12} centerOnSmall>
            <div className={styles.linkWrapper}>
              <p className={styles.linkText}>Already have an account?
                <Link to="/login">
                  {' Login'}
                </Link>
              </p>
            </div>
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
  validate: validation
})(CSSModules(SignupForm, styles));
