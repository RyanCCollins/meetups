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
import {
  FormInputError,
  FormInputField,
  FormFooter
} from 'components';
import { inputHasError } from 'utils/misc';

export const fields = [
  'fullnameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput'
];

const PasswordHint = () => (
  <div className={styles.popoverBody}>
    <div className={styles.popoverEmoji}>
      👮
    </div>
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
    this.onHoverPassword = this.onHoverPassword.bind(this);
    this.onLeavePassword = this.onLeavePassword.bind(this);
    this.onHoverLink = this.onHoverLink.bind(this);
    this.state = {
      popoverOpen: false,
      isHovering: false
    };
  }
  onHoverLink() {
    this.setState({
      isHovering: !this.state.isHovering
    });
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
      submitting
    } = this.props;
    const {
      popoverOpen,
      isHovering
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
              onSubmit={handleSubmit}
            >
              <FormInputField
                {...fullnameInput}
                field={fullnameInput}
                labelText="Full Name"
              />
              <FormInputField
                {...emailInput}
                field={emailInput}
                labelText="Email Address"
              />
              <div className="form-group">
                <label
                  className={inputHasError(passwordInput) &&'error'}
                  htmlFor="passwordInput"
                >
                  Password
                </label>
                <Popover isOpen={popoverOpen} preferPlace={'right'} body={<PasswordHint />}>
                  <div></div>
                </Popover>
                <input
                  {...passwordInput}
                  type="password"
                  name="password"
                  id="passwordInput"
                  className={inputHasError(passwordInput) &&'error'}
                  aria-invalid={passwordInput.error !== null}
                  placeholder="Password"
                  onMouseEnter={this.onHoverPassword}
                  onMouseLeave={this.onLeavePassword}
                ></input>
                {inputHasError(passwordInput) &&
                  <FormInputError input={passwordInput} />
                }
              </div>
              <FormInputField
                {...passwordConfirmationInput}
                field={passwordConfirmationInput}
                labelText="Password Confirmation"
                inputType="password"
              />
              <div className={styles.buttonGroup}>
                <Button
                  isExpanded
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
                <Button
                  isExpanded
                  isHollow
                  size={'large'}
                  disabled={submitting}
                  onClick={resetForm}
                  className={styles.buttonMarginLeft}
                >
                  Clear Form
                </Button>
              </div>
            </form>
          </Column>
        </Row>
        <FormFooter
          url="/login"
          text="Login"
        />
      </div>
    );
  }
}

SignupForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'signupForm',
  fields,
  validate: validation
})(CSSModules(SignupForm, styles));
