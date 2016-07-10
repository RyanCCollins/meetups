import React, { PropTypes, Component } from 'react';
import { GuestListInput, GuestsList } from 'components';
import styles from './GuestList.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addGuest,
  removeGuest
} from 'actions/guestsList';

class GuestList extends Component {
  constructor(props) {
    super(props);
    this.handleAddGuest = this.handleAddGuest.bind(this);
    this.handleDeleteGuest = this.handleDeleteGuest.bind(this);
  }
  handleAddGuest(guest) {
    console.log(`Called handle add guest with ${guest}`)
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
      guests,
      guestsInput
    } = this.props;
    return (
      <div>
        <GuestListInput
          {...guestsInput}
          onAddGuest={this.handleAddGuest}
        />
        <GuestsList guests={guests} onDeleteGuestItem={this.handleDeleteGuest} />
      </div>
    );
  }
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  addGuestToList: PropTypes.func.isRequired,
  removeGuestFromList: PropTypes.func.isRequired,
  guestsInput: PropTypes.object
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addGuestToList: (guest) => dispatch(addGuest(guest)),
    removeGuestFromList: (id) => dispatch(removeGuest(id))
  }, dispatch);

const mapStateToProps = (state) => ({
  guests: state.guestsList,
  guestsInput: PropTypes.object.isRequired
});

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestList);

export default cssModules(SmartComponent, styles);
