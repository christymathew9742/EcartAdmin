import React from 'react';
import { Spin } from 'antd';
// import 'antd/lib/spin/style/index.css'; 

const CenteredLoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set height to full viewport height
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
      }}
    >
      <Spin tip="Loading" size="large" />
    </div>
  );
};

export default CenteredLoadingSpinner;
