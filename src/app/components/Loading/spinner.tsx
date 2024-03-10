import { Alert, Spin } from 'antd';
import React from 'react';
import styles from './spinner.module.scss';

const Spinner = ({ message }: any) => {
  return (
    <div className={styles['container']}>
      <Spin tip="Loading..."></Spin>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Spinner;
