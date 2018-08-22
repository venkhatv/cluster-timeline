import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card } from 'antd';
import appStyles from '../app.css';
import timelineStyles from '../_timeline.css';
import styles from './_cards.css';

function getList(data) {
  return data.map((item) => {
    const dateObj = new moment(item.Date, 'YYYY-MM-DD');
    const dateFormatted = dateObj.format("DD MMM'YY");
    return (<li key={item.Id} className={styles.row}>
      <div className={styles.itemName}>
        {item.Name} <br />
        {item.Subject} <br />
        {item.Resolution} <br />
      </div>
      <div>{dateFormatted}</div>
            </li>
    );
  });
}

class CaseDispatchCard extends React.Component {
  componentDidMount() {
    // this.props.dbsActions.fetchData();
  }


  render() {
    const {
      caseData: data, empty,
    } = this.props;


    if (empty) {
      return (
        <Card
          bordered={false}
          title={
            <div>
              { 'Case/Dispatch History'}
            </div>}
          hoverable
          // loading={props.data.loading}
        >
        No month Chosen
        </Card>
      );
    }
    if (!data) {
      return (
        <Card
          bordered={false}
          title={
            <div>
              { 'Case/Dispatch History'}
            </div>}
          hoverable
          // loading={props.data.loading}
        >
        No changes
        </Card>
      );
    }
    return (
      <Card
        bordered={false}
        title={
          <div>
            { 'Case/Dispatch History'}
          </div>}
        hoverable
        // loading={props.data.loading}
      >
        <div className={appStyles.cardBody}>
          <p className={styles.caseDetailRow} dangerouslySetInnerHTML={{ __html: data && data.replace(/\n|\r\n/gi, '<br />') }} />
          {/* <ul>
            {getList(data)}
          </ul> */}
        </div>
      </Card >
    );
  }
}


export default CaseDispatchCard;
