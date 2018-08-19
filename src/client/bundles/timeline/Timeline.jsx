import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';


class Timeline extends Component {
  componentDidMount() {
    this.props.actions.fetchDetails();
  }
  render() {
    const { clusterData } = this.props.data;
    return (
      <div>{JSON.stringify(clusterData)}</div>
    );
  }
}

export default Timeline;

