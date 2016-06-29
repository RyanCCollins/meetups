import React, { PropTypes } from 'react';
import styles from './LoginPage.module.scss';
import CSSModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator
} from '../../components';

class LoginPage extends React.Component {
  render() {
    const {
      isFetching
    } = this.props;
    return (
      <LoadingIndicator isLoading={true}>
        <SectionHeader header="Log In" />

      </LoadingIndicator>
    );
  }
}

LoginPage.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default CSSModules(LoginPage, styles);
