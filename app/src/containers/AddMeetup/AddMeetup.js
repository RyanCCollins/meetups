import React, { Component, PropTypes } from 'react';
import styles from './AddMeetup.module.scss';
import cssModules from 'react-css-modules';
import { reduxForm } from 'redux-form';
import { DateField, TransitionView, Calendar } from 'react-date-picker';
import 'react-date-picker/index.css';
import moment from 'moment';
import {
  FormInputField,
  SelectField,
  LocationInput
} from 'components';
import { GuestList } from 'containers';
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
    this.handleSuggestSelect = this.handleSuggestSelect.bind(this);
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
  handleSuggestSelect(value) {
    console.log(`Got a value ${value}`);
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
                labelText="Name"
                placeholder="The name of the event"
              />
              <SelectField
                {...typeInput}
                options={defaultSelectOptions}
              />
              <FormInputField
                {...hostInput}
                field={hostInput}
                labelText="Host"
                placeholder="Who is hosting?"
              />
              <GuestList
                {...guestsInput}
              />
              <LocationInput onSuggestSelect={this.handleSuggestSelect} />
              <div className="form-group">
                <Row>
                  <Column large={6}>
                    <label htmlFor="start-date-input">Start Date</label>
                    <DateField
                      {...startDateInput}
                      className={styles.dateInput}
                      id="start-date-input"
                      forceValidDate
                      defaultValue={"2016-05-30 15:23:34"}
                      dateFormat="YYYY-MM-DD HH:mm:ss"
                    >
                      <TransitionView>
                        <Calendar style={{padding: 10}} />
                      </TransitionView>
                    </DateField>
                  </Column>
                  <Column large={6}>
                    <label htmlFor="end-date-input">End Date</label>
                    <DateField
                      {...endDateInput}
                      className={styles.dateInput}
                      forceValidDate
                      defaultValue={"2016-05-30 15:23:34"}
                      dateFormat="YYYY-MM-DD HH:mm:ss"
                    >
                      <TransitionView>
                        <Calendar style={{padding: 10}}/>
                      </TransitionView>
                    </DateField>
                  </Column>
                </Row>
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
