import React, { Component, PropTypes } from 'react';
import styles from './MeetupPage.bundle.scss';
import cssModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator,
  BackButton,
  MeetupPanel,
  MeetupList,
  Modal
} from '../../components';
import { AddMeetup } from 'containers';

class MeetupPage extends Component {
  constructor(props) {
    super(props);
    this.handleAddMeetup = this.handleAddMeetup.bind(this);
    this.state = {
      isAddingMeetup: false
    };
  }
  handleAddMeetup() {
    this.setState({ isAddingMeetup: true });
  }
  render() {
    const {
      isFetching,
      meetups
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className={styles.container}>
          <BackButton />
          <SectionHeader header="Meetups" />
          <MeetupPanel
            onAddMeetup={this.handleAddMeetup}
            {...this.props}
          >
            <MeetupList
              meetups={meetups || null}
            />
          </MeetupPanel>
          {/*<Modal isOpen={this.state.isAddingMeetup || false}>
            <AddMeetup />
          </Modal>*/}
        </div>
      </LoadingIndicator>
    );
  }
}

MeetupPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  meetups: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  meetups: state.meetups
});

export default cssModules(MeetupPage, styles);
