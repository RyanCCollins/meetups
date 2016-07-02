import React, { Component, PropTypes } from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import styles from './SignupForm.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import { toastr } from 'redux-toastr';
import validation from './signupValidation';
import Popover from 'react-popover';
import {
  FormInputError,
  FormInputField,
  FormFooter,
  FormButtonGroup
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
      <li className={styles.red}>Must contain at least 1 special character</li>
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
    this.handleError = this.handleError.bind(this);
    this.state = {
      popoverOpen: false,
      isHovering: false
    };
  }
  componentDidMount() {
    const {
      errors
    } = this.props;
    if (errors.length) {
      this.handleError(errors[0]);
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors.length) {
      this.handleErrors(newProps.errors[0]);
    }
  }
  handleError(error) {
    toastr.warn(error);
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
            medium={8}
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
                  className={inputHasError(passwordInput) && 'error'}
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
                  className={inputHasError(passwordInput) && 'error'}
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
              <FormButtonGroup />
            </form>
          </Column>
        </Row>
        <FormFooter
          url="login"
          text="Already have an account?"
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
})(cssModules(SignupForm, styles));
