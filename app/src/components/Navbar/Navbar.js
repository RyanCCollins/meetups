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
            <Menu className={styles.menuCentered}>
              <MenuItem>
                <Link to="/portfolio">Portfolio</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/services">Services</Link>
              </MenuItem>
            </Menu>
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
