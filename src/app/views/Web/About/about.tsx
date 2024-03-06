// import React from "react";

// const About = () => {
//     return (
//         <>
//         <h1>about</h1>
//         </>
//     )
// }

// export default About

/// About.tsx

import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import styles from './about.module.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const About: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');

  const handleMenuClick = ({ key }: { key: React.Key }) => {
    setSelectedMenuItem(key.toString());
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="dark">
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['1-1']}
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
        >
          {[...Array(7)].map((_, mainIndex) => (
            <SubMenu key={`main${mainIndex + 1}`} icon={<UserOutlined />} title={`Menu ${mainIndex + 1}`}>
              {[...Array(3)].map((__, subIndex) => (
                <Menu.Item key={`${mainIndex + 1}-${subIndex + 1}`}>
                  Submenu {subIndex + 1}
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header className={styles['site-layout-background']} style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Overview</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles['site-layout-background']} style={{ padding: 24, minHeight: 360 }}>
            {selectedMenuItem && `Content for ${selectedMenuItem}`}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design Dashboard ©2023 Created by You</Footer>
      </Layout>
    </Layout>
  );
};

export default About;
