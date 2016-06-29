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

    </Column>
  </Row>
);

MeetupList.propTypes = {
  meetups: PropTypes.array,
  onSubmitNewMeetup: PropTypes.func.isRequired
};

export default cssModules(MeetupList, styles);
