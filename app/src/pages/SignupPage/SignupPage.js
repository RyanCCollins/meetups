import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './SignupPage.module.scss';
import cssModules from 'react-css-modules';
import { SignupForm } from '../../containers';
import { signupUser } from '../../actions/user';
import { toastr } from 'redux-toastr';
import { BackButton } from 'components';

import {
  SectionHeader,
  LoadingIndicator
} from '../../components';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleSubmit(params) {
    const {
      isFetching,
      onSubmitForm
    } = this.props;
    if (!isFetching) {
      return onSubmitForm({
        fullname: params.fullnameInput,
        email: params.emailInput,
        password: params.passwordInput
      });
    }
  }
  componentDidMount() {
    const {
      errors
    } = this.props;
    if (errors.length) {
      console.log("Called component did mount with ", errors)
      this.handleError(errors[0]);
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors.length) {
      console.log("Called will receive props with ", newProps)
      this.handleError(newProps.errors[0]);
    }
  }
  handleError(error) {
    toastr.error(error);
  }
  render() {
    const {
      isFetching
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className={styles.container}>
          <BackButton />
          <SectionHeader
            className={styles.blue}
            header="Sign Up Now"
          />
          <SignupForm
            onSubmit={this.handleSubmit}
            {...this.props}
          />
        </div>
      </LoadingIndicator>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.array,
  isFetching: PropTypes.bool,
  onSubmitForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitForm: (params) => dispatch(signupUser(params))
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default cssModules(SmartComponent, styles);
