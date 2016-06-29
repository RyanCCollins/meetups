import React, { Component } from 'react';
import styles from './MeetupPage.bundle.scss';
import cssModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator,
  BackButton
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
        </div>
      </LoadingIndicator>
    );
  }
}

export default cssModules(MeetupPage, styles);
