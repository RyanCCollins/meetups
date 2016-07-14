import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import ErrorPanel from './ErrorPanel/ErrorPanel';
import MessagePanel from './MessagePanel/MessagePanel';
import './InfoPanel.scss';

const InfoPanel = ({
  isFetching,
  messages,
  errors,
  onClose
}) => (
  <div className="messages-section">
    <Row className="errors-row__wrapper">
      <ErrorPanel
        errors={errors}
        onClose={onClose}
        isVisible={!isFetching && errors.length > 0}
      />
    </Row>
    <Row className="messages-row__wrapper">
      <MessagePanel
        messages={messages}
        onClose={onClose}
        isVisible={!isFetching && messages.length > 0}
      />
    </Row>
  </div>
);

InfoPanel.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  messages: PropTypes.array,
  errors: PropTypes.array,
  onClose: PropTypes.func.isRequired
};

export default InfoPanel;
