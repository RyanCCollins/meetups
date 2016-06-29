import React, { Component, PropTypes } from 'react';
import styles from './LoginForm.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import validation from './loginValidation';
import {
  FormInputField,
  FormFooter
 } from 'components';
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
              <FormInputField
                {...emailInput}
                field={emailInput}
                labelText="Email Address"
              />
              <FormInputField
                {...passwordInput}
                field={passwordInput}
                labelText="Password"
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
          url="/signup"
          text="Signup"
        />
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
})(cssModules(LoginForm, styles));
