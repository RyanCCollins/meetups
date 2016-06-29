import React, { Component, PropTypes } from 'react';
import styles from './LoginForm.module.scss';
import CSSModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import validation from './loginValidation';
import {
  FaCog,
  FaPaperPlane
} from 'react-icons/lib/fa';
import {
  Button,
  Row,
  Column
} from 'react-foundation';

const fields = [
  'emailInput',
  'passwordInput'
];

class LoginForm extends Component {
  render() {
    const {
      fields: {
        emailInput,
        passwordInput
      },
      resetForm,
      handleSubmit,
      submitting
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
            <form
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="emailInput">Email Address</label>
                <input
                  {...emailInput}
                  type="text"
                  required
                  className={emailInput.error ? 'error' : ''}
                  aria-invalid={emailInput.error}
                  aria-describedby="emailInputError"
                  id="emailInput"
                  name="name"
                  placeholder="Full Name"
                />
              {emailInput.touched &&
                emailInput.error &&
                <span id="emailInputError">
                  <small className="error">
                    {emailInput.error}
                  </small>
                </span>
              }
              >
                <div className="form-group">
                  <label htmlFor="passwordInput">Password</label>
                  <input
                    {...passwordInput}
                    type="text"
                    required
                    className={passwordInput.error ? 'error' : ''}
                    aria-invalid={passwordInput.error}
                    aria-describedby="passwordInputError"
                    id="passwordInput"
                    name="password"
                    placeholder="Password"
                  />
                {passwordInput.touched &&
                  passwordInput.error &&
                  <span id="passwordInputError">
                    <small className="error">
                      {passwordInput.error}
                    </small>
                  </span>
                }
                </div>
              </div>
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
      </div>
    );
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'loginForm',
  fields,
  validate: validation
})(CSSModules(LoginForm, styles));
