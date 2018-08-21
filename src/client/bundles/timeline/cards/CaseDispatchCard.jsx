import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card } from 'antd';
import appStyles from '../app.css';
import timelineStyles from '../_timeline.css';
import styles from './_cards.css';

function getList(data) {
  return data.map((item) => {
    const dateObj = new moment(item.date, 'YYYY-MM-DD');
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
      caseData: data,
    } = this.props;

    return (
      <Card
        bordered={false}
        title={
          <div>
            Hardware Changes
          </div>}
        hoverable
        // loading={props.data.loading}
      >
        <div className={appStyles.cardBody}>
          <ul>
            {getList(data)}
          </ul>
        </div>
      </Card >
    );
  }
}


export default CaseDispatchCard;
