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
  constructor(props) {
    super(props);
    const {
      location
    } = props;
    const step = location.query.step || 1;
    this.state = {
      step
    };
  }
  render() {
    const { step } = this.state;
    return (
      <Row className="relative full-height perfectly-center">
        <BackButton />
        <Column
          isColumn
          small={12}
          medium={8}
          large={8}
          centerOnSmall
          className={styles.flexCenter}
        >
          <AddMeetup step={step} />
        </Column>
      </Row>
    );
  }
}

AddMeetupPage.propTypes = {

};

export default cssModules(AddMeetupPage, styles);
