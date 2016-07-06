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
  MeetupList,
  Modal
} from '../../components';
import { AddMeetup } from 'containers';
import {
  getMeetups,
  createMeetup
} from '../../actions/meetups';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {
  Column,
  Row
} from 'react-foundation';


const position = [51.505, -0.09];
const TheMap = () => (
  <Row>
    <Column small={12} isColumn className={styles.mapContainer}>
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    </Column>
  </Row>
);


class MeetupPage extends Component {
  constructor(props) {
    super(props);
    this.handleAddMeetup = this.handleAddMeetup.bind(this);
    this.state = {
      isAddingMeetup: false
    };
  }
  componentDidMount() {
    const {
      getMeetupsList
    } = this.props;
    getMeetupsList();
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
            onAddMeetup={this.handleAddMeetup}
            {...this.props}
          >
            <MeetupList
              meetups={meetups.data || null}
            />
          </MeetupPanel>
          <TheMap />
          <Modal isOpen={this.state.isAddingMeetup || false}>
            <AddMeetup />
          </Modal>
        </div>
      </LoadingIndicator>
    );
  }
}

MeetupPage.propTypes = {
  errors: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  meetups: PropTypes.object.isRequired,
  getMeetupsList: PropTypes.func.isRequired,
  createNewMeetup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  isFetching: state.meetups.isFetching,
  meetups: state.meetups
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getMeetupsList: () => dispatch(getMeetups()),
    createNewMeetup: (data) => dispatch(createMeetup(data))
  }, dispatch);

const SmartComponent = connect(mapStateToProps, mapDispatchToProps)(MeetupPage);
export default cssModules(SmartComponent, styles);
