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
import { LoginForm } from '../../containers';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formData) {
    const {
      dispatch
    } = this.props;
  }
  render() {
    const {
      isFetching
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <SectionHeader header="Log In" />
        <LoginForm
          {...this.props}
          onSubmit={this.handleSubmit}
        />
        <div data-alert class="alert-box alert round">
          This is an alert - alert that is rounded.
          <a href="#" class="close">&times;</a>
        </div>
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
