import React, { Component, PropTypes } from 'react';
import styles from './AddMeetup.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import {
  FormInputField
} from 'components';
import {
  Row,
  Column,
  Button
} from 'react-foundation';


const fields = [
  'nameInput',
  'typeInput',
  'hostInput',
  'startDateInput',
  'endDateInput',
  'guestsInput'
];

class AddMeetup extends Component {
  constructor(props) {
    super(props);
    const {
      errors
    } = this.props;
    this.state = {
      hasErrors: errors.length > 0
    };
  }
  render() {
    const {
      fields: {
        nameInput,
        typeInput,
        hostInput,
        startDateInput,
        endDateInput,
        guestsInput
      },
      resetForm,
      handleSubmit,
      submitting,
      errors
    } = this.props;
    return (
      <div>
        <Row>
          <Column
            large={12}
            className={styles.formContainer}
            isColumn
            centerOnSmall
          >
            <form
              onSubmit={handleSubmit}
            >
              <FormInputField
                {...nameInput}
                field={nameInput}
                labelText="Name of Event"
              />
              <FormInputField
                {...nameInput}
                field={nameInput}
                labelText="Name of Event"
              />
              <FormInputField
                {...nameInput}
                field={nameInput}
                labelText="Name of Event"
              />
              <FormInputField
                {...nameInput}
                field={nameInput}
                labelText="Name of Event"
              />
              <div className={styles.buttonWrapper}>
                <Button size={'large'} disabled={submitting}>
                  Submit
                </Button>
              </div>
            </form>
          </Column>
        </Row>
      </div>
    );
  }
}

AddMeetup.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  errors: PropTypes.array
};

export default reduxForm({
  form: 'addMeetup',
  fields
})(cssModules(AddMeetup, styles));
