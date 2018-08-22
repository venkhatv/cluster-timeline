import React, { Component } from 'react';
import styles from './_timeline.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import TimelineComponent from './TimelineComponent';
import Cards from './cards/Cards';
import appStyles from './app.css';
import { AutoComplete, Input, Select } from 'antd';

const Option = Select.Option;

class Timeline extends Component {
  componentDidMount() {
    this.props.actions.fetchListDetails();
  }
  clusterChange(value) {
    const { selectedClusterId, selectedBlockId, clusterList } = this.props.data;
    const blockIdsObj = clusterList.find(item => item.clusterId === value);
    const blockIds = blockIdsObj ? blockIdsObj.blockIds.split(',') : [];
    this.props.actions.setState({
      selectedClusterId: value,
      selectedBlockId: blockIds[0],
    });
  }
  blockChange(value) {
    this.props.actions.setState({
      selectedBlockId: value,
    });
  }

  clickHandler(date) {
    const data = this.props.data.clusterDataArr.find(item => item.date === date);

    if (data.softwareItems === null && data.caseData === null && data.hardwareItems === null) {
      // do ntorhing
    } else {
      this.props.actions.setState({
        selectedMonthData: data,
      });
    }
  }
  // clusterChange(value) {
  //   this.props.actions.setState({
  //     selectedClusterId: value,
  //   });
  // }
  componentDidUpdate(prevProps) {
    // const id = '00054b37-9065-8d92-28f3-246e96351668';
    // const blockId = 'B8150H2';
    const { selectedClusterId, selectedBlockId } = this.props.data;
    if (selectedClusterId && selectedBlockId && (prevProps.data.selectedClusterId !== selectedClusterId
      || prevProps.data.selectedBlockId !== selectedBlockId)) {
      this.props.actions.fetchDetails({ id: selectedClusterId, blockId: selectedBlockId });
    }
  }

  handleSearch(value) {
    let filteredClusterArr;
    if (!value) {
      filteredClusterArr = [];
    } else {
      filteredClusterArr = this.props.data.clusterArr.filter(item => item.toLowerCase().startsWith(value.toLowerCase()));
    }
    this.props.actions.setState({
      filteredClusterArr,
    });
  }

  getInputBox() {
    const {
      selectedClusterId, selectedBlockId, clusterList, clusterArr,
    } = this.props.data;
    const blockIdsObj = clusterList.find(item => item.clusterId === selectedClusterId);
    const blockIds = blockIdsObj ? blockIdsObj.blockIds.split(',') : [];
    return (
      <div>
        {/* <div className={styles.dropbox}> */}
        <span className={styles.inputLabel}>Cluster UUID :  </span>
        {/* <AutoComplete
          dataSource={this.props.data.filteredClusterArr}
          style={{ width: 300 }}
          onSelect={(e) => { this.onSelect(e); }}
          value={selectedClusterId || ''}
          onSearch={(e) => { this.handleSearch(e); }}
          placeholder="Choose a cluster Id"
        /> */}
        <Select
          defaultValue=""
          value={selectedClusterId || ''} // selectedClusterId || clusterArr[0]
          onSelect={(e) => { this.clusterChange(e); }}
          style={{ width: 300 }}
        >
          {clusterArr.map(val => <Option value={val}>{val}</Option>)}
        </Select>
        {selectedClusterId ?
          (<div className={styles.dropbox}>
            <span className={styles.inputLabel}>Block ID :  </span>
            <Select
              defaultValue=""
              value={selectedBlockId || blockIds[0] || ''}
              onChange={(e) => { this.blockChange(e); }}
              style={{ width: 300 }}
            >
              {blockIds.slice(0, 15).map(val => <Option value={val}>{val}</Option>)}
            </Select>

           </div>) : null
        }
      </div>
    );
  }
  render() {
    const { clusterDataArr, selectedMonthData } = this.props.data;
    return (
      <div className={styles.wrapperDiv}>
        {this.getInputBox()}
        <TimelineComponent clusterData={clusterDataArr} clickHandler={(e) => { this.clickHandler(e); }} />
        <Cards clusterData={selectedMonthData} />
        {/* <div className={styles.detailsDiv}>
          <h1 className={styles.placeHolder}>Please choose a month to see detailed activity</h1>
        </div> */}
      </div>
    );
  }
}

export default Timeline;

