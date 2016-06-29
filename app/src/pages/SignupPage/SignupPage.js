import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './SignupPage.module.scss';
import cssModules from 'react-css-modules';
import { SignupForm } from '../../containers';
import { signupUser } from '../../actions/user';
import {
  SectionHeader,
  LoadingIndicator
} from '../../components';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    const {
      isFetching,
      onSubmitForm,
      onError
    } = this.props;
    if (false) {
      return onSubmitForm({
        fullname: params.fullname,
        email: params.email,
        password: params.password
      });
    }
    return onError(['Only one submission at a time.']);
  }
  render() {
    const {
      isFetching
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className={styles.container}>
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
  onSubmitForm: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors.user,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitForm: (params) => dispatch(signupUser(params)),
    onErrors: (errors) => dispatch({ type: 'SIGNUP_FAILURE', errors })
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default cssModules(SmartComponent, styles);
