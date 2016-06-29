import React, { PropTypes } from 'react';
import styles from './LoginPage.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../actions/user';
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
  handleSubmit(params) {
    const {
      onSubmitForm
    } = this.props;
    return onSubmitForm({
      email: params.emailInput,
      password: params.passwordInput
    });
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
      </LoadingIndicator>
    );
  }
}

LoginPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.user.errors,
  isFetching: state.user.isFetching
});


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitForm: (params) => dispatch(loginUser(params))
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default cssModules(SmartComponent, styles);
