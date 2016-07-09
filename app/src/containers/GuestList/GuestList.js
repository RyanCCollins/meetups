import React, { PropTypes, Component } from 'react';
import { GuestListInput } from 'components';
import { MdClear } from 'react-icons/lib/md';
import styles from './GuestList.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addGuest,
  removeGuest
} from 'actions/guestsList';

const GuestsList = ({
  guests,
  handleDeleteGuest
}) => (
  <div className={styles.guestsList}>
    <ul className="no-bullet">
    {guests.map((guest) =>
      <li>
        <p>{guest.name}</p>
        <MdClear onClick={handleDeleteGuest} />
      </li>
    )}
    </ul>
  </div>
);

GuestsList.propTypes = {
  guests: PropTypes.array,
  handleDeleteGuest: PropTypes.func.isRequired
};

class GuestList extends Component {
  constuctor(props) {
    super(props);
    this.handleAddGuest = this.handleAddGuest.bind(this);
    this.handleDeleteGuest = this.handleDeleteGuest.bind(this);
  }
  handleAddGuest(guest) {
    const {
      addGuestToList
    } = this.props;
    addGuestToList(guest);
  }
  handleDeleteGuest(id) {
    const {
      removeGuestFromList
    } = this.props;
    removeGuestFromList(id);
  }
  render() {
    const {
      guests
    } = this.props;
    return (
      <div>
        <GuestListInput onAddGuest={this.handleAddGuest} />
        <GuestsList guests={guests} onDeleteGuest={this.handleDeleteGuest} />
      </div>
    );
  }
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  addGuestToList: PropTypes.func.isRequired,
  removeGuestFromList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addGuestToList: (guest) => dispatch(addGuest(guest)),
    removeGuestFromList: (id) => dispatch(removeGuest(id))
  }, dispatch);

const mapStateToProps = (state) => ({
  guests: state.guestsList
});

const smartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestList);

export default cssModules(smartComponent, styles);
