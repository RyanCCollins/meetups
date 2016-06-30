import React, { Component, PropTypes } from 'react';
import styles from './Modal.module.scss';
import BoronModal from 'boron/OutLineModal';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    this.refs.modal.hide();
  }
  render() {
    const {
      children
    } = this.props;
    return (
      <BoronModal
        closeOnClick
        ref="modal"
      >
        <div className={styles.modal}>
          {children}
        </div>
      </BoronModal>
    );
  }
}

Modal.propTypes = {
  children: React.children,
  isOpen: PropTypes.bool.isRequired
};

export default Modal;
