import React, { Component, PropTypes } from 'react';
import { BackButton } from 'components';
import { AddMeetup } from 'containers';
import styles from './AddMeetupPage.module.scss';
import cssModules from 'react-css-modules';
import {
  Column,
  Row
} from 'react-foundation';

class AddMeetupPage extends Component {
  render() {
    return (
      <Row className="relative">
        <BackButton />
        <Column
          isColumn
          small={12}
          medium={8}
          large={8}
          centerOnSmall
          className={styles.flexCenter}
        >
          <AddMeetup />
        </Column>
      </Row>
    );
  }
}

AddMeetupPage.propTypes = {

};

export default cssModules(AddMeetupPage, styles);
