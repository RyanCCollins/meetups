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
import Popover from 'react-popover';

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
              <label htmlFor="fullname">Full Name</label>
              <div>
                <input
                  {...fullnameInput}
                  type="text"
                  required
                  aria-invalid={fullnameInput.error}
                  id="fullname"
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
                <label>Email</label>
                <input
                  {...emailInput}
                  type="text"
                  aria-invalid={emailInput.error}
                  aria-required
                  aria-describedby="emailInputError"
                  name="email"
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
                <label>Password</label>
                <Popover isOpen={popoverOpen} preferPlace={'right'} body={<PasswordHint />}>
                  <div></div>
                </Popover>
                <input
                  {...passwordInput}
                  type="password"
                  name="password"
                  aria-invalid={passwordInput.error}
                  placeholder="Password"
                  onMouseEnter={this.onHoverPassword}
                  onMouseLeave={this.onLeavePassword}
                ></input>
                {passwordInput.touched &&
                  passwordInput.error &&
                  <span className="error">
                    {passwordInput.error}
                  </span>
                }
              </div>
              <div>
                <label>Password Confirmation</label>
                <input
                  {...passwordConfirmationInput}
                  type="password"
                  aria-invalid={passwordConfirmationInput.error}
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
})(SignupForm);
