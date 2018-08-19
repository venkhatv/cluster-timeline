import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Loading = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-13px',
    marginTop: '-10px',
  }}
  >
    <Spin indicator={antIcon} size="large" />
  </div>
);


export default Loading;
