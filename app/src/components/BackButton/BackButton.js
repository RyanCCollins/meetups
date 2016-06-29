import React from 'react';
import styles from './BackButton.module.scss';

class BackButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <div
        className={styles.backButton}
        onClick={this.handleGoBack}
      ></div>
    );
  }
}

BackButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BackButton;
