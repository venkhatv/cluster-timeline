import React, { Component } from 'react';
import timelineStyles from '../_timeline.css';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';
import appStyles from '../app.css';
import styles from './_cards.css';
import SoftwareCard from './SoftwareCard';
import HardwareCard from './HardwareCard';
import CaseDispatchCard from './CaseDispatchCard';

import { detailData } from '../clusterData';

class Cards extends Component {
  componentDidMount() {
    // this.props.actions.fetchDetails();
  }
  render() {
    // const { clusterData } = this.props;
    const clusterData = detailData;
    return (
      <div className={styles.cardContainer}>
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <SoftwareCard data={clusterData.softwareItems} />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
          >
            <HardwareCard data={clusterData.hardwareItems} />

          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <CaseDispatchCard caseData={clusterData.caseData} dispatchData={clusterData.caseData} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;

