import React, { Component, PropTypes } from 'react';
import styles from './MeetupPage.bundle.scss';
import cssModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator,
  BackButton,
  MeetupPanel
} from '../../components';

class MeetupPage extends Component {
  render() {
    const {
      isFetching
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className={styles.container}>
          <BackButton />
          <SectionHeader header="Meetups" />
          <MeetupPanel
            {...this.props}
          />
        </div>
      </LoadingIndicator>
    );
  }
}

MeetupPage.PropTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default cssModules(MeetupPage, styles);
