import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const colorMappings = {
  red: 'lineRed',
  blue: 'lineBlue',
  green: 'lineGreen',
  violet: 'lineViolet',
};

const iconClassMappings = {
  case: 'supportCase',
  dispatch: 'dispatch',
  software: 'software',
  hardware: 'hardware',
};


class TimelineItem extends Component {
  componentDidMount() {
    // this.props.actions.fetchDetails();
  }
  render() {
    const {
      color, iconType, subText, position, index,
    } = this.props;
    const zIndexClass = `zindex${15 - index}`;
    const positionClass = position === 'top' ? 'timeline-top' : 'timeline-bottom';
    const iconClass = iconClassMappings[iconType];
    const colorClass = colorMappings[color];
    let renderElt;
    renderElt = position === 'top' ? (
      <div className={`${styles.timelineItem} ${styles[zIndexClass]} ${styles[positionClass]}`}>
        <div className={`${styles.childDiv} ${styles[positionClass]}`}>{this.props.children}</div>
        <div className={`${styles.connectLines}`}>
          <span className={`${styles.line} ${styles[colorClass]} ${styles.firstLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.secondLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.thirdLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.fourthLine} ${styles[positionClass]}`} />
        </div>
        <div className={`${styles.imageDiv} ${styles[iconClass]} ${styles[positionClass]}`} />
        <div className={`${styles.subText} ${styles[positionClass]}`} >{subText}</div>
      </div>
    ) : (
      <div className={`${styles.timelineItem} ${styles[zIndexClass]} ${styles[positionClass]}`}>
        <div className={`${styles.subText} ${styles[positionClass]}`} >{subText}</div>
        <div className={`${styles.imageDiv} ${styles[iconClass]} ${styles[positionClass]}`} />
        <div className={`${styles.connectLines}`}>
          <span className={`${styles.line} ${styles[colorClass]} ${styles.firstLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.secondLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.thirdLine} ${styles[positionClass]}`} />
          <span className={`${styles.line} ${styles[colorClass]} ${styles.fourthLine} ${styles[positionClass]}`} />
        </div>
        <div className={`${styles.childDiv} ${styles[positionClass]}`}>{this.props.children}</div>


      </div>
    );

    return renderElt;
  }
}

export default TimelineItem;

