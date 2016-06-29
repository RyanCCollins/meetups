import React, { PropTypes } from 'react';
import {
  Column,
  Row,
  Callout
} from 'react-foundation';
import styles from './MeetupList.module.scss';
import { GoCalendar } from './GoCalendar/GoCalendar';

const NoMeetups = () => (
  <Callout className={styles.noMeetups}>

  </Callout>
);

const MeetupList = ({
  meetups
}) => (
  <Row>
    <Column large={6} small={10} isColumn centerOnSmall>
      <Callout color={'primary'} size={'large'}>
        <span className={styles.iconStyle}>
          <GoCalendar />
        </span>
      </Callout>
    </Column>
  </Row>
);

MeetupList.propTypes = {
  myProps: PropTypes.function.isRequired
};

export default MeetupList;
