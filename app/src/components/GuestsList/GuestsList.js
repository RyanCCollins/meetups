import React, { PropTypes, Component } from 'react';
import styles from './GuestsList.module.scss';
import cssModules from 'react-css-modules';
import { GuestsListItem } from 'components';

class GuestsList extends Component {
  handleDeleteItem(id) {
    const {
      onDeleteGuestItem
    } = this.props;
    onDeleteGuestItem(id);
  }
  render() {
    const {
      guests
    } = this.props;
    return (
      <div className={styles.guestsList}>
        <ul className="no-bullet">
          {guests.map((guest, i) =>
            <GuestsListItem
              key={i}
              guest={guest}
              i={i}
              onDeleteGuest={this.handleDeleteItem.bind(this, i)}
            />
          )}
        </ul>
      </div>
    );
  }
}

GuestsList.propTypes = {
  guests: PropTypes.array,
  onDeleteGuestItem: PropTypes.func.isRequired
};

export default cssModules(GuestsList, styles);
