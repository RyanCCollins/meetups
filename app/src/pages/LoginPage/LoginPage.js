import React, { PropTypes } from 'react';
import styles from './LoginPage.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../actions/user';
import { toastr, actions as toastrActions  } from 'redux-toastr';

import {
  SectionHeader,
  LoadingIndicator
} from '../../components';
import { LoginForm } from '../../containers';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
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
  componentDidMount() {
    const {
      errors
    } = this.props;
    if (errors.length) {
      this.handleError(errors[0]);
    }
  }
  componentWillReceiveProps(newProps) {
    console.log("Received new props ", newProps);
    if (newProps.errors.length) {
      this.handleError(newProps.errors[0]);
    }
  }
  handleError(error) {
    console.log("Called handle error with error: ", error)
    toastr.error(error);
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
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.array
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitForm: (params) => dispatch(loginUser(params))
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default cssModules(SmartComponent, styles);
