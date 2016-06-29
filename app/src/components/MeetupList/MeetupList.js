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
  meetups
}) => (
  <Row>
    <Column large={6} small={10} isColumn centerOnSmall>
      <Callout color={'primary'} size={'large'}>
        <div className={styles.flexCenter}>
          <span className={styles.iconWrapper}>
            <GoCalendar className={styles.iconStyle} />
          </span>
          <h4 className={styles.text}>No Meetups Yet...</h4>
          <Link className={styles.buttonLink} to="/meetups/create">
            <Button className={styles.button}>
              Create One
            </Button>
          </Link>
        </div>
      </Callout>
    </Column>
  </Row>
);

MeetupList.propTypes = {
  meetups: PropTypes.array
};

export default cssModules(MeetupList, styles);
