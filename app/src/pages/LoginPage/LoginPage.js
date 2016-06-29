import React, { PropTypes } from 'react';
import styles from './LoginPage.module.scss';
import CSSModules from 'react-css-modules';
import { loginUser } from '../../actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      <LoadingIndicator isLoading={isFetching}>
        <SectionHeader header="Log In" />

      </LoadingIndicator>
    );
  }
}

LoginPage.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.user.errors,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    loginUser
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(LoginPage, styles));
