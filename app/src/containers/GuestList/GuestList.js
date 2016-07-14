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
      field
    } = this.props;
    return (
      <div>
        <GuestListInput
          field={field}
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
  field: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addGuestToList: (guest) => dispatch(addGuest(guest)),
    removeGuestFromList: (id) => dispatch(removeGuest(id))
  }, dispatch);

const mapStateToProps = (state) => ({
  guests: state.guestsList
});

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestList);

export default cssModules(SmartComponent, styles);
