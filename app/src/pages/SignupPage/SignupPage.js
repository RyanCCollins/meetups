import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './SignupPage.module.scss';
import { SignupForm } from '../../containers';
import { SectionHeader } from '../../components';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formData) {
    const {
      user,
      dispatch,
      submitNewUser
    } = this.props;
    if (!user.isSubmitting) {
      return dispatch(submitNewUser({
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password
      }));
    }
    return dispatch({ type: 'DISPLAY_ERROR ', error: 'Only one submission at a time.' });
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
  dispatch: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state) => ({
  errors: state.errors.user,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSubmitNewUser: submitSignup
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
