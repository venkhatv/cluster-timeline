import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import TimelineComponent from './TimelineComponent';

class Timeline extends Component {
  componentDidMount() {
    this.props.actions.fetchDetails();
  }
  render() {
    const { clusterData } = this.props.data;
    return (
      <div>
        <div>{JSON.stringify(clusterData)}</div>
        <TimelineComponent data-value={clusterData} />
      </div>
    );
  }
}

export default Timeline;

