import React, { Component, PropTypes } from 'react';
import styles from './AddMeetup.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  FormInputField,
  SelectField
} from 'components';
import {
  Row,
  Column,
  Button
} from 'react-foundation';


const defaultSelectOptions = [
  {
    id: 0,
    name: 'Coding Meetup',
    value: 'coding-meetup'
  },
  {
    id: 1,
    name: 'Work Gathering',
    value: 'work-gathering'
  },
  {
    id: 2,
    name: 'Birthday',
    value: 'birthday'
  },
  {
    id: 3,
    name: 'Conference Talk',
    value: 'conference-talk'
  },
  {
    id: 4,
    name: 'Wedding',
    value: 'wedding'
  },
  {
    id: 5,
    name: 'Other',
    value: 'other'
  }
];

const fields = [
  'nameInput',
  'typeInput',
  'hostInput',
  'startDateInput',
  'endDateInput',
  'guestsInput',
  'locationInput'
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
    this.formatAsDate = this.formatAsDate.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
  formatAsDate(string) {
    return moment(string).format('DD/MM/YYYY');
  }
  handleStartDateChange(event) {
    console.log(`Changing start date to: ${event}`)
  }
  handleEndDateChange(event) {
    console.log(`Changing end date to: ${event}`)
  }
  render() {
    const {
      fields: {
        nameInput,
        typeInput,
        hostInput,
        startDateInput,
        endDateInput,
        guestsInput,
        locationInput
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
              <SelectField
                {...typeInput}
                options={defaultSelectOptions}
              />
              <FormInputField
                {...typeInput}
                field={nameInput}
                labelText="Name of Event"
              />
              <FormInputField
                {...hostInput}
                field={hostInput}
                labelText="Who's Hosting the Event?"
              />
              <div className="form-group">
                <DatePicker
                  {...startDateInput}
                  dateFormat="DD/MM/YYYY"
                  placeholderText="Click to select a start date"
                  selected={moment()}
                  startDate={moment()}
                  endDate={moment()}
                  onChange={this.handleStartDateChange}
                />
              </div>
              <div className="form-group">
                <DatePicker
                  {...endDateInput}
                  dateFormat="DD/MM/YYYY"
                  placeholderText="Click to select an end date"
                  selected={moment()}
                  startDate={moment()}
                  endDate={moment()}
                  onChange={this.handleEndDateChange}
                />
              </div>
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
