import React from "react";
import { useMediaQuery } from 'react-responsive';
import { MenuOutlined } from '@ant-design/icons';
import { Link, NavLink } from "react-router-dom";
import styles from './footer.module.scss';
import { useState } from 'react';
import { constantsText } from "../../constants/constant";
import { removeExtraSpaces } from "../../utils/utils";
import { 
    Layout,
    Col,
    Row,
    List,
    Typography,
    Input,
    Button,
    Modal,
} from 'antd';
const {
    ROUTES: {
        HOME,
        SHOP,
        CONTACT,
        ABOUT,
        HEADER_LAYOUT: {
            Home,
            Shop,
            Contact,
            About
        },
        FOOTER_LAYOUT: {
            Send
        }
    },
} = constantsText
const links = [
    Home,Shop,Contact,About
];
const help = [
    'Payment Options',
    'Returns',
    'Policies',
];

const Footer = () => {
    const isMobile:boolean = useMediaQuery({ maxWidth: 767 });
    const [popup, setpopup]:any = useState(false)
    const showModal = () => {
        setpopup(true);
    };
    const handleOk = () => {
        setpopup(false);
    };
    const handleCancel = () => {
        setpopup(false);
    };
    return (
        <Layout.Footer 
            className= {styles['footer']}>
            <Row
                className= {styles['footerContent']}
            >
                <Col 
                    span={isMobile? 22 :11}
                >
                    <Row>
                        <Typography.Title
                            level={4}
                        >
                            Funiro      
                        </Typography.Title>
                    </Row>
                    <Row>
                    <Typography.Title
                        level={5}
                    >
                            400 University Drive Suite 200 Coral Gables,FL 33134 USA
                        </Typography.Title>
                    </Row>
                </Col>
                {!isMobile ? (<>  
                    <Col 
                        span={2}
                    >
                        <Row>
                            <Typography.Text strong>Links</Typography.Text>  
                        </Row>
                        <Row>
                            <List
                                bordered={false}
                                dataSource={links}
                                renderItem={item => (
                                    <List.Item>
                                        <NavLink 
                                            to ={`/${item == 'Home' ? '': item.toLowerCase()}`}
                                            style={({ isActive}) => {
                                                return {
                                                    fontWeight: isActive ? 600 : "",
                                                };
                                            }}
                                        > 
                                            {item}
                                        </NavLink> 
                                    </List.Item>
                                )}
                            />
                        </Row>
                    </Col>
                    <Col 
                        span={4}
                    >
                        <Row>
                            <Typography.Text strong>Help</Typography.Text>  
                        </Row>
                        <Row>
                            <List
                                bordered={false}
                                dataSource={help}
                                renderItem={item => (
                                    <List.Item>
                                        <NavLink 
                                            to ={`/${removeExtraSpaces(item.toLowerCase())}`}
                                            style={({ isActive}) => {
                                                return {
                                                    fontWeight: isActive ? 600 : "",
                                                };
                                            }}
                                        > 
                                            {item}
                                        </NavLink> 
                                    </List.Item>
                                )}
                            />
                        </Row>
                    </Col>
                    <Col 
                        span={7}
                    >
                        <Row>
                            <Typography.Text 
                            strong
                        >
                            Newsletter
                        </Typography.Text>  
                        </Row>
                        <Row>
                            <Col>
                                <Input 
                                    placeholder="Enter Your Email Address" 
                                />   
                            </Col>
                            <Col>
                            <Button 
                                type="link" block
                            >
                                {Send}
                            </Button>    
                            </Col>
                        </Row>
                    </Col>
                </>):(
                <>
                    <Col
                        span={2}
                    >
                        <MenuOutlined
                            onClick={showModal}
                        />
                    </Col>
                    <Modal 
                        open={popup} 
                        onOk={handleOk} 
                        onCancel={handleCancel}
                        className={styles['footerPopUp']}
                        footer={null}
                    >
                        <Row>  
                            <Col 
                                span={6}
                            >
                                <Row>
                                    <Typography.Text strong>Links</Typography.Text>  
                                </Row>
                                <Row>
                                    <List
                                        bordered={false}
                                        dataSource={links}
                                        renderItem={item => (
                                            <List.Item>
                                                <NavLink 
                                                    to ={`/${item == 'Home' ? '': item.toLowerCase()}`}
                                                    style={({ isActive}) => {
                                                        return {
                                                            fontWeight: isActive ? 600 : "",
                                                        };
                                                    }}
                                                > 
                                                    {item}
                                                </NavLink> 
                                            </List.Item>
                                        )}
                                    />
                                </Row>
                            </Col>
                            <Col 
                                span={10}
                            >
                                <Row>
                                    <Typography.Text strong>Help</Typography.Text>  
                                </Row>
                                <Row>
                                    <List
                                        bordered={false}
                                        dataSource={help}
                                        renderItem={item => (
                                            <List.Item>
                                                <NavLink 
                                                    to ={`/${removeExtraSpaces(item.toLowerCase())}`}
                                                    style={({ isActive}) => {
                                                        return {
                                                            fontWeight: isActive ? 600 : "",
                                                        };
                                                    }}
                                                > 
                                                    {item}
                                                </NavLink> 
                                            </List.Item>
                                        )}
                                    />
                                </Row>
                            </Col>
                            <Row>
                                <Col
                                    span={24}
                                >
                                    <Typography.Text 
                                    strong
                                    >
                                        Newsletter
                                    </Typography.Text>  
                                </Col>
                                <Col>
                                    <Input 
                                        placeholder="Enter Your Email Address" 
                                    />  
                                </Col>
                                <Col>
                                    <Button 
                                        type="link" block
                                    >
                                        {Send}
                                    </Button> 
                                </Col>
                            </Row>
                        </Row>
                    </Modal>
                </>
                )}
            </Row>
            <Typography.Text 
                strong 
                className={styles['tc']}
            >
                    2023 furino. All rights reverved
                </Typography.Text>  
        </Layout.Footer>
    )
}

export default Footer