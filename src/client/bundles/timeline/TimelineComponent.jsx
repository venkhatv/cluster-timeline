import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import TimelineItem from './TimelineItem';
import moment from 'moment';
import clusterData from './clusterData';

const colorMappings = {
  case: 'red',
  dispatch: 'violet',
  software: 'blue',
  hardware: 'green',
};
function getColorAndType(clusterData) {
  let type;
  const {
    caseCount, dispatchCount, softwareItems = [], hardwareItems = [],
  } = clusterData;
  if (softwareItems.length === 0 && hardwareItems.length === 0) {
    type = caseCount > dispatchCount ? 'case' : 'dispatch';
    return { type, color: colorMappings[type] };
  }
  if (softwareItems.length > hardwareItems.length) {
    type = 'software';
    return { type, color: colorMappings[type] };
  }
  type = 'hardware';
  return { type, color: colorMappings[type] };
}

class TimelineComponent extends Component {
  componentDidMount() {
    // this.props.actions.fetchDetails();
  }
  render() {
    // const { clusterData } = this.props;

    const renderElt = clusterData.map((item, index) => {
      const { type, color } = getColorAndType(item);
      const position = index % 2 === 0 ? 'top' : 'bottom';
      const dateObj = new moment(item.date, 'DD/MM/YYYY');
      const subText = dateObj.format("MMM'YY");
      return (<TimelineItem
        color={color}
        iconType={type}
        subText={subText}
        position={position}
        index={index}
      >
        <div className={styles.contentDiv}>
          {item.softwareItems}
          {item.hardwareItems}
          {item.caseCount}
          {item.disptachCount}
        </div>
              </TimelineItem>);
    });

    return (
      <div className={styles.timelineComponent}>
        <div className={styles.dummyDiv} />
        {renderElt}
      </div>
    );
  }
}

export default TimelineComponent;


// return (

//     <div className={styles.timelineComponent}>
//       <div className={styles.dummyDiv} />
//       <TimelineItem
//         color="red"
//         iconType="case"
//         subText="Mar'18"
//         position="top"
//         index={0}
//       >
//         <div className={styles.contentDiv}>
//           Hello <br />
//           Whatsup <br />
//         </div>
//       </TimelineItem>

//       <TimelineItem
//         color="violet"
//         iconType="dispatch"
//         subText="Mar'18"
//         position="bottom"
//         index={1}
//       >
//         <div className={styles.contentDiv}>
//           Hello <br />
//           Whatsup <br />
//         </div>
//       </TimelineItem>
//     </div>
//   );
