import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { Link } from 'react-router';
import {
  Row,
  Column,
  Button
} from 'react-foundation';
import { SectionHeader } from '../../components';

const LandingPage = (props) => (
  <div className="gradient-purple fill-screen">
    <div className="container">
      <div className={styles.header}>
        <SectionHeader
          header="Meetup Event Planner"
          subHeader="Serving all of your meetup needs"
        />
      </div>
      <div className={styles.flexCenter}>
        <div className={styles.buttonWrapper}>
          <Link to="/signup">
            <Button size={'large'} isHollow className={styles.button}>
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CSSModules(LandingPage, styles);
