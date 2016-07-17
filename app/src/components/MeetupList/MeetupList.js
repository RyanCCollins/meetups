import React, { PropTypes } from 'react';
import {
  Column,
  Row
} from 'react-foundation';
import styles from './MeetupList.module.scss';
import cssModules from 'react-css-modules';

const MeetupList = ({
  meetups
}) => (
  <Row>
    <Column large={6} small={10} isColumn centerOnSmall>
      <div>{meetups.map((event) => <li>{event}</li>)}</div>
    </Column>
  </Row>
);

MeetupList.propTypes = {
  meetups: PropTypes.array
};

export default cssModules(MeetupList, styles);
