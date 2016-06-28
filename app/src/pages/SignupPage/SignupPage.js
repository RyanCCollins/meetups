import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './SignupPage.module.scss';
import { SignupForm } from '../../containers';
import { signupUser } from '../../actions/user';
import { SectionHeader } from '../../components';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formData) {
    const {
      isFetching,
      dispatch
    } = this.props;
    if (!isFetching) {
      return signupUser({
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password
      });
    }
    return dispatch({ type: 'DISPLAY_ERROR', error: 'Only one submission at a time.' });
  }
  render() {
    return (
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
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func,
  errors: PropTypes.array,
  isFetching: PropTypes.bool
};

const mapStateToProps = (state) => ({
  errors: state.user.errors,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    signupUser
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
