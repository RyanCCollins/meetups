import React, { PropTypes } from 'react';
import {
  Column,
  Row,
  Callout,
  Button
} from 'react-foundation';
import styles from './MeetupPanel.module.scss';
import { GoCalendar } from 'react-icons/lib/go';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import MeetupList from 'components';

const MeetupPanel = ({
  children,
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
          <Link to={{ pathname: 'meetups/new', query: { step: 1 } }}>
            <Button className={styles.button}>
              Create One
            </Button>
          </Link>
        </div>
        <div>{meetups.length && meetups.map((meetup) => <li>{meetup}</li>)}</div>
        {children}
      </Callout>
    </Column>
  </Row>
);

MeetupPanel.propTypes = {
  meetups: PropTypes.array,
  children: React.children
};

export default cssModules(MeetupPanel, styles);
