import React,{ useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    DownOutlined,
    GiftOutlined,
    HomeOutlined,
    IdcardOutlined,
    InboxOutlined,
    InteractionOutlined,
    LayoutOutlined,
    MailOutlined,
    NotificationOutlined,
    PlusSquareOutlined,
    PoweroffOutlined,
    ProductOutlined,
    SettingOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import styles from './mainLayout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import {constantsText} from '../../constants/constant'
import { 
  Layout, 
  Menu, 
  Breadcrumb, 
  Button,
  Typography,
  Dropdown,
  Row,
  Col,
  Space,
} from 'antd';
import {Auth} from '../../utils/FirebaseConfig/firebaseConfig'
import Cookies from 'universal-cookie';
import SwitchingComponent from './SwitchingComponent';
import {
  UserOutlined,
} from '@ant-design/icons';

interface DropDown {
  key: string;
  label: React.ReactNode;
}
type DropDownData = DropDown[];
type MenuItem = Required<MenuProps>['items'][number];
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const cookies = new Cookies();
const currentUser = cookies.get('currentUser')

export const withRouter = (Component: any) => {
    const Wrapper = (props: any) => {
      const history = useNavigate();
      return <Component history={history} {...props} />;
    };
    return Wrapper;
};

const {
ROUTES: {
    DASHBOARD,
    PRODUCTS,
    PRODUCT,
    ORDERS,
    SETTINGS,
    HOME,
},
MENUITEM: {
  MenuItems,
},
MAIN_LAYOUT,
} = constantsText;


const MainLayout: any = (props: any) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed]:any = useState(false);
  const { pathname } = useLocation()
  console.log(pathname)
  const {slug} = useParams()
  const handleLogout =  () => {
      try {
        setTimeout(() => {
          Auth.signOut()
          navigate('/')
          cookies.remove('accessToken');
        }, 2000);
      } catch (error) {
        console.error('Error signing out:', error);
      }
  };
  
  const menu = (
      <Menu
        onClick={handleLogout}
        items={[
          {
            label: 'Log out',
            key: '1',
            icon: <PoweroffOutlined />
          }
        ]}
      />
  );

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(<Link to={DASHBOARD}>Dashboard</Link>, DASHBOARD, <LayoutOutlined/>),
    getItem(<Link to={HOME}>Home</Link>,HOME,<HomeOutlined/>),
    getItem(PRODUCT, '3', <ProductOutlined/>,[
      getItem(<Link to={PRODUCTS?.AddProducts}>Add Product</Link>,PRODUCTS?.AddProducts),
      getItem(<Link to={PRODUCTS?.ListProduct}>List Product</Link>, PRODUCTS?.ListProduct),
      getItem(<Link to={PRODUCTS?.Categories}>Categories</Link>, PRODUCTS?.Categories),
      getItem(<Link to={PRODUCTS?.Tags}>Tags</Link>, PRODUCTS?.Tags),
    ]),
    getItem(<Link to={SETTINGS}>Settings</Link>, SETTINGS, <SettingOutlined />),
  ];
  const MenuItens2: DropDownData = [...MenuItems]
  const dropDownData: DropDownData = [
    {
      key: '1',
      label: (
        <span onClick={handleLogout}  rel="noopener noreferrer">
          Log Out
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Edit Profile
        </a>
      ),
    },
  ];
  return (
    <Layout className={styles['layoutContainer']} >
      <Row
        className={styles['iconSection']}
      >
        <NotificationOutlined />
        <PlusSquareOutlined />
        <InteractionOutlined />
      </Row>
      <Sider
        collapsible
        collapsed={collapsed} 
        onCollapse={(value:any):any => setCollapsed(value)}
        className={styles['sliderContainer']}
        width={150}
      >
        <Menu 
          theme="dark" 
          defaultSelectedKeys={[pathname]} 
          mode="inline" 
          items={items}
        />
      </Sider>
      <Layout className="siteLayout">
        <Header
          className={styles['headerContainer']}
        >
          <Row
            className={styles['headerMenus']}
          >
            <Col
              offset={18}
              span={6}
            >
              <Typography.Paragraph
                className={styles['userName']}
              >
                Hi,{currentUser?.displayName}
                <Space  direction="vertical">
                  <Space wrap>
                    <Dropdown overlay={
                      <Menu>{
                        dropDownData.map(item => item ? <Menu.Item key={item?.key}>{item?.label}</Menu.Item> : null)
                      }
                      </Menu>} placement="bottomLeft">
                      <UserOutlined/>
                    </Dropdown>
                  </Space>
                </Space>  
              </Typography.Paragraph>
            </Col>
          </Row>
        </Header>
        <Content
            className={styles['contentContainer']}
            style={{padding:'20px'}}
        >
          <SwitchingComponent slug={slug} />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            padding: '5px 50px',
            fontSize: '13px'
          }}
        >
          {MAIN_LAYOUT?.FOOTER}
        </Footer>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout);