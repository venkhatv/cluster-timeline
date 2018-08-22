import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card, Tooltip } from 'antd';
import TimelineItem from './TimelineItem';
import moment from 'moment';


const colorMappings = {
  case: 'red',
  dispatch: 'violet',
  software: 'blue',
  hardware: 'green',
};
function getColorAndType(clusterData) {
  let type;
  const {
    caseCount, dispatchCount,
  } = clusterData;
  let { softwareItems, hardwareItems } = clusterData;
  if (softwareItems === null || softwareItems === undefined) {
    softwareItems = { items: [] };
  }
  if (hardwareItems === null || hardwareItems === undefined) {
    hardwareItems = { items: [] };
  }
  if (softwareItems.items.length === 0 && hardwareItems.items.length === 0) {
    type = caseCount > dispatchCount ? 'case' : 'dispatch';
    return { type, color: colorMappings[type] };
  }
  if (softwareItems.items.length > hardwareItems.items.length) {
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
    const { clusterData = [], clickHandler } = this.props;

    const renderElt = clusterData.map((item, index) => {
      const { type, color } = getColorAndType(item);
      const position = index % 2 === 0 ? 'top' : 'bottom';
      const dateObj = new moment(item.date, 'YYYY-MM-DD');
      const subText = dateObj.format("MMM'YY");
      let newArr = [];
      let noPointer;
      if (item.softwareItems === null && item.caseData === null && item.hardwareItems === null) {
        // do ntorhing
        noPointer = true;
      }
      if (item.softwareItems) {
        const softArrArr = item.softwareItems.map(val => val && val.items);
        for (let i = 0; i < softArrArr.length; i++) {
          newArr = newArr.concat(softArrArr[i]);
        }
      }
      if (item.hardwareItems) {
        const hardArrArr = item.hardwareItems.map(val => val && val.items);
        for (let i = 0; i < hardArrArr.length; i++) {
          newArr = newArr.concat(hardArrArr[i]);
        }
      }

      const toolDiv = (<div className={styles.tooltipDiv}>

        { newArr ? newArr.map(val => <div className={styles.toolDivElt}>{val}</div>) : '' }

        {/* <div dangerouslySetInnerHTML={{ __html: (item.softwareItems && item.softwareItems.replace(/\n|\r\n/gi, '<br />')) || '' }} />
          <div dangerouslySetInnerHTML={{ __html: (item.hardwareItems && item.softwareItems.replace(/\n|\r\n/gi, '<br />')) || '' }} /> */}
        { item.caseCount > 0 ? <div className={styles.toolDivElt}> Case Count: {item.caseCount || 0} </div> : null }
        {item.dispatchCount > 0 ? <div className={styles.toolDivElt}> Dispatch Count: {item.dispatchCount || 0} </div> : null }
      </div>);


      return (<TimelineItem
        color={color}
        iconType={type}
        subText={subText}
        date={item.date}
        noPointer={noPointer}
        position={position}
        index={index}
        clickHandler={clickHandler}
      >
        <Tooltip placement="right" title="">
          <div className={styles.contentDiv}>

            { newArr ? newArr.map(val => <div className={styles.childDivElt}>{val}</div>) : '' }

            {/* <div dangerouslySetInnerHTML={{ __html: (item.softwareItems && item.softwareItems.replace(/\n|\r\n/gi, '<br />')) || '' }} />
          <div dangerouslySetInnerHTML={{ __html: (item.hardwareItems && item.softwareItems.replace(/\n|\r\n/gi, '<br />')) || '' }} /> */}
            { item.caseCount > 0 ? <div className={styles.childDivElt}> Case Count: {item.caseCount || 0} </div> : null }
            {item.dispatchCount > 0 ? <div className={styles.childDivElt}> Dispatch Count: {item.dispatchCount || 0} </div> : null }
          </div>
        </Tooltip>
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
