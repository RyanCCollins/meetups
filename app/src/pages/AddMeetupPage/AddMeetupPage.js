import React, { Component, PropTypes } from 'react';
import { BackButton } from 'components';
import { AddMeetup } from 'containers';
import {
  Column,
  Row
} from 'react-foundation';

class AddMeetupPage extends Component {
  render() {
    return (
      <Row>
        <BackButton />
        <Column isColumn small={12} medium={8} large={8} centerOnSmall>
          <AddMeetup />
        </Column>
      </Row>
    );
  }
}

AddMeetupPage.propTypes = {

};

export default AddMeetupPage;
