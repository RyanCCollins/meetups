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
import { SpeechButton } from 'components';


const StepCounter = ({
  currentStep,
  steps
}) => (
  <div>

  </div>
);

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
  'locationInput',
  'locationLatInput',
  'locationLongInput'
];

class AddMeetup extends Component {
  constructor(props) {
    super(props);
    const {
      errors
    } = this.props;
    this.state = {
      hasErrors: errors.length > 0,
      speechInput: {
        name: {
          isRecording: false
        }
      }
    };
    this.formatAsDate = this.formatAsDate.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSuggestSelect = this.handleSuggestSelect.bind(this);
    this.handleSpeechRecognition = this.handleSpeechRecognition.bind(this);
    this.handleSpeechResult = this.handleSpeechResult.bind(this);
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
  handleSpeechResult(event) {
    const { fields } = this.props;
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        console.log(`Setting value of nameInput to: ${event.results[i][0].transcript}`)
        fields.nameInput.value += event.results[i][0].transcript;
      }
    }
  }
  handleSpeechRecognition(e) {
    const { speechInput } = this.state;
    const flipped = Object.assign({}, speechInput, {
      name: {
        isRecording: !speechInput.name.isRecording
      }
    });
    this.setState({ speechInput: flipped });
    e.preventDefault();
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
    recognition.onresult = this.handleSpeechResult;
  }
  render() {
    const {
      speechInput
    } = this.state;
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
              <div className="form-input-group">
                <FormInputField
                  {...nameInput}
                  field={nameInput}
                  labelText="Name"
                  placeholder="The name of the event"
                />
                <SpeechButton
                  isOn={speechInput.name.isRecording}
                  onClick={this.handleSpeechRecognition}
                />
              </div>
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
                field={guestsInput}
              />
              <LocationInput
                {...locationInput}
                onSuggestSelect={this.handleSuggestSelect}
                field={locationInput}
              />
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
                        <Calendar style={{ padding: 10 }} />
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
                        <Calendar style={{ padding: 10 }} />
                      </TransitionView>
                    </DateField>
                  </Column>
                </Row>
              </div>
              <div className={styles.buttonWrapper}>
                <Button size={'large'} disabled={submitting} isExpanded>
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
const StyledComponent = cssModules(AddMeetup, styles);

export default reduxForm({
  form: 'addMeetup',
  fields
})(StyledComponent);
