import React, { Component, PropTypes } from 'react';
import styles from './MeetupPage.bundle.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import {
  SectionHeader,
  LoadingIndicator,
  BackButton,
  MeetupPanel,
  MeetupList
} from '../../components';
import {
  getMeetups,
  getMeetup,
  deleteMeetup,
  updateMeetup,
  createMeetup
} from '../../actions/meetups';

class MeetupPage extends Component {
  constructor(props) {
    super(props);
    this.handleAddMeetup = this.handleAddMeetup.bind(this);
    this.state = {
      isAddingMeetup: false,
      shouldCloseModalOnClick: false
    };
  }
  componentDidMount() {
    const {
      getMeetupsList
    } = this.props;
    getMeetupsList();
  }
  handleEditDates() {
    this.setState({
      shouldCloseModalOnClick: true
    });
  }
  handleAddMeetup() {
    this.setState({ isAddingMeetup: true });
  }
  render() {
    const {
      isFetching,
      meetups
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <div className={styles.container}>
          <BackButton />
          <SectionHeader header="Meetups" />
          <MeetupPanel
            {...this.props}
            meetups={meetups}
            onAddMeetup={this.handleAddMeetup}
          >
            <MeetupList
              meetups={meetups || null}
            />
          </MeetupPanel>
        </div>
      </LoadingIndicator>
    );
  }
}

MeetupPage.propTypes = {
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  meetups: PropTypes.array.isRequired,
  getMeetupsList: PropTypes.func.isRequired,
  createNewMeetup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  error: state.meetups.error,
  isFetching: state.meetups.isFetching,
  meetups: state.meetups.data
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getMeetupsList: () => dispatch(getMeetups()),
    createNewMeetup: (data) => dispatch(createMeetup(data)),
    getOneMeetup: (id) => dispatch(getMeetup(id)),
    updateOneMeetup: (id) => dispatch(updateMeetup(id)),
    deleteOneMeetup: (id) => dispatch(deleteMeetup(id))
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(MeetupPage);
export default cssModules(SmartComponent, styles);
