import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import TimelineItem from './TimelineItem';

class TimelineComponent extends Component {
  componentDidMount() {
    // this.props.actions.fetchDetails();
  }
  render() {
    const { clusterData } = this.props.data;
    return (
      <TimelineItem
        color="red"
        iconClass="Core"
        subText="Mar'18"
        position="top"
      >
        <div className={styles.contentDiv}>
        Hello <br />
        Whatsup <br />
        </div>
      </TimelineItem>
    );
  }
}

export default TimelineComponent;

