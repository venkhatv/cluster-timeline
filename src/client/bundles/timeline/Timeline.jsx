import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import TimelineComponent from './TimelineComponent';
import Cards from './cards/Cards';
import appStyles from './app.css';

class Timeline extends Component {
  componentDidMount() {
    const id = '00054b37-9065-8d92-28f3-246e96351668';
    const blockId = 'B8150H2';
    this.props.actions.fetchDetails({ id, blockId });
  }
  render() {
    const { clusterDataArr, selectedMonthData } = this.props.data;
    return (
      <div className={styles.wrapperDiv}>
        <TimelineComponent clusterData={clusterDataArr} />
        <Cards clusterData={selectedMonthData} />
        {/* <div className={styles.detailsDiv}>
          <h1 className={styles.placeHolder}>Please choose a month to see detailed activity</h1>
        </div> */}
      </div>
    );
  }
}

export default Timeline;

