import React, { Component, PropTypes } from 'react';
import styles from './LoginForm.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import validation from './loginValidation';
import {
  FormInputField,
  FormFooter,
  ErrorAlert,
  FormButtonGroup
} from 'components';
import {
  Row,
  Column
} from 'react-foundation';

const fields = [
  'emailInput',
  'passwordInput'
];

class LoginForm extends Component {
  constructor(props) {
    super(props);
    const {
      errors
    } = this.props;
    this.state = {
      hasErrors: errors.length > 0
    };
    this.handleAlertCloseClick = this.handleAlertCloseClick.bind(this);
  }
  handleAlertCloseClick() {
    this.setState({
      hasErrors: false
    });
  }
  render() {
    const {
      fields: {
        emailInput,
        passwordInput
      },
      resetForm,
      handleSubmit,
      submitting,
      errors
    } = this.props;
    const {
      hasErrors
    } = this.state;
    return (
      <div className={styles.container}>
        {hasErrors &&
          <Row>
            <Column
              small={12}
              medium={6}
              large={6}
              className={styles.formContainer}
              isColumn
              centerOnSmall
            >
              <ErrorAlert
                errors={errors}
                headerText="The following errors have occured"
                onCloseClick={this.handleAlertCloseClick}
              />
            </Column>
          </Row>
        }
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
              <FormButtonGroup
                submitting={submitting}
                resetForm={resetForm}
              />
            </form>
          </Column>
        </Row>
        <FormFooter
          url="signup"
          text="Need to create an account?"
        />
      </div>
    );
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  errors: PropTypes.array
};

export default reduxForm({
  form: 'loginForm',
  fields,
  validate: validation
})(cssModules(LoginForm, styles));
