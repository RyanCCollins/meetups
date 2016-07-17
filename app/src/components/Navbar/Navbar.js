import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';
import { MeetupLogo } from 'components';
import Headroom from 'react-headroom';
import styles from './Navbar.module.scss';
import cssModules from 'react-css-modules';

const NotAuthenticated = () => (
  <Menu className={styles.menuCentered}>
    <MenuItem>
      <span>
        <Link className="has-slash" to="/signin" activeClassName="active">Signin</Link>
        <Link to="/signup" activeClassName="active">Signup</Link>
      </span>
    </MenuItem>
  </Menu>
);

const Authenticated = () => (
  <Menu className={styles.menuCentered}>
    <MenuItem>
      <Link to="/meetups" activeClassName="active">Meetups</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/profile" activeClassName="active">Profile</Link>
    </MenuItem>
  </Menu>
);

const Navbar = ({
  isSignedIn
}) => (
  <Headroom className={styles.headroomWrapp}>
    <TopBar className="navbar">
      <Row>
        <Column className={styles.navbarCenter}>
          <TopBarTitle className={styles.navbarTitle}>
            <Link to="/">
              <MeetupLogo />
            </Link>
          </TopBarTitle>
          <TopBarRight className={styles.navbarRight}>
            {isSignedIn ?
              <Authenticated />
            :
              <NotAuthenticated />
            }
          </TopBarRight>
        </Column>
      </Row>
    </TopBar>
  </Headroom>
);

Navbar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
};

export default cssModules(Navbar, styles);
