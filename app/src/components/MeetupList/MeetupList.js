import React, { PropTypes } from 'react';
import {
  Column,
  Row,
  Callout,
  Button
} from 'react-foundation';
import styles from './MeetupList.module.scss';
import { GoCalendar } from 'react-icons/lib/go';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';

const NoMeetups = () => (
  <Callout className={styles.noMeetups}>

  </Callout>
);

const MeetupList = ({
  meetups,
  onSubmitNewMeetup
}) => (
  <Row>
    <Column large={6} small={10} isColumn centerOnSmall>
      <Callout color={'primary'} size={'large'}>
        <div className={styles.flexCenter}>
          <span className={styles.iconWrapper}>
            <GoCalendar className={styles.iconStyle} />
          </span>
          <h4 className={styles.text}>No Meetups Yet...</h4>
          <Button className={styles.button} onClick={onSubmitNewMeetup}>
            Create One
          </Button>
        </div>
      </Callout>
    </Column>
  </Row>
);

MeetupList.propTypes = {
  meetups: PropTypes.array,
  onSubmitNewMeetup: PropTypes.func.isRequired
};

export default cssModules(MeetupList, styles);
