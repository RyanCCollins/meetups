import React, { Component, PropTypes } from 'react';
import styles from './MeetupPage.bundle.scss';
import cssModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator,
  BackButton,
  MeetupPanel,
  MeetupList
} from '../../components';

class MeetupPage extends Component {
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
            {...this.props}
          >
            <MeetupList
              meetups={meetups || null}
            />
          </MeetupPanel>
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
