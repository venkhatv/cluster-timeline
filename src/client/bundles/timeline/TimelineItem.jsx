import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';


class TimelineItem extends Component {
  componentDidMount() {
    this.props.actions.fetchDetails();
  }
  render() {
    const {
      color, iconClass, subText, position,
    } = this.props;
    return (
      <div className={styles.timelineItem}>
        <div className={styles.childDiv}>{this.props.children}</div>
        <div className={styles.connectLines}>
          <span className={`${styles.line} ${styles.firstLine}`} />
          <span className={`${styles.line} ${styles.secondLine}`} />
          <span className={`${styles.line} ${styles.thirdLine}`} />
          <span className={`${styles.line} ${styles.fourthLine}`} />
        </div>
        <div className={`${styles.imageDiv} ${iconClass}`} />
        <div className={styles.subText}>{subText}</div>
      </div>
    );
  }
}

export default TimelineItem;

