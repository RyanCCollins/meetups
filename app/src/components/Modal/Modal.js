import React, { Component, PropTypes } from 'react';
import styles from './Modal.module.scss';
import cssModules from 'react-css-modules';
import BoronModal from 'boron/OutLineModal';

// Individual styles for the modal, modal content, and backdrop
const modalStyle = {
  width: '80%',
};

const backdropStyle = {
  backgroundColor: '#525c65'
};

const contentStyle = {
  backgroundColor: '#def0fc',
  height: '100%'
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      canClose: true
    };
  }
  componentDidMount() {
    const {
      isOpen
    } = this.props;
    if (isOpen) {
      this.handleOpen();
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.isOpen) {
      this.handleOpen();
    }
  }
  handleOpen() {
    this.refs.modal.show();
  }
  handleClose() {
    const { canClose } = this.state;
    if (canClose) {
      this.refs.modal.hide();
    }
  }
  render() {
    const {
      children,
      shouldCloseModalOnClick
    } = this.props;
    return (
      <BoronModal
        closeOnClick={shouldCloseModalOnClick}
        modalStyle={modalStyle}
        backdropStyle={backdropStyle}
        contentStyle={contentStyle}
        ref="modal"
        className={styles.formGroup}
      >
        <div className={styles.modal}>
          <button
            id="button-close-messages-panel"
            className={styles.btnClose}
            onClick={this.handleClose}
          >✕</button>
          {children}
        </div>
      </BoronModal>
    );
  }
}

Modal.propTypes = {
  children: React.children,
  isOpen: PropTypes.bool.isRequired,
  shouldCloseModalOnClick: PropTypes.bool.isRequired
};

export default cssModules(Modal, styles);
