import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.scss';
import { useState } from 'react';
import { constantsText } from "../../constants/constant";
import { 
    Layout,
    Col,
    Row,
    Image,
    Tabs,
    Modal,
    Button,
} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from "../../assets/img/svg/Frame 168.svg";
import login from "../../assets/img/svg/login.svg";
import search from "../../assets/img/svg/searchi.svg";
import wishlist from "../../assets/img/svg/wishlist.svg";
import cart from "../../assets/img/svg/cart.svg";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const isMobile:boolean = useMediaQuery({ maxWidth: 767 });
    const {
        ROUTES: {
            HOME,
            SHOP,
            CONTACT,
            ABOUT,
            HEADER_LAYOUT :{
                Home,
                Shop,
                Contact,
                About
            }
        }
    } = constantsText
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
        <Layout.Header
            className={styles['headerLayout']}
        >
            <Row 
                className={styles['headerElements']}
            >
                <Col 
                    span={isMobile ? 22 : 8}
                >   
                    <Image
                        width={185}
                        preview={false} 
                        src={logo}
                    />
                </Col>
                {!isMobile ? (<>    
                <Col 
                    span={8}
                >
                    <nav>
                        <ul>
                            <NavLink 
                                to={HOME} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Home}
                            </NavLink>
                            <NavLink to={SHOP} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Shop}
                            </NavLink>
                            <NavLink to={ABOUT} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {About}
                            </NavLink>
                            <NavLink to={CONTACT} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Contact}
                            </NavLink>
                        </ul>
                    </nav>

                </Col>
                <Col 
                    span={8}
                    className={styles['headerLayout-icons']}
                >
                    <Row
                        gutter={[60, 60]}
                    >
                        <Col
                        >
                            <Image
                                width={28}
                                preview={false} 
                                src={login}
                            />
                        </Col>
                        <Col
                        >
                            <Image
                                width={28}
                                preview={false} 
                                src={search}
                            />
                        </Col>
                        <Col
                        >
                            <Image
                                width={28}
                                preview={false} 
                                src={wishlist}
                            />
                        </Col>
                        <Col
                        >
                            <Image
                                width={28}
                                preview={false} 
                                src={cart}
                            />
                        </Col>
                    </Row>
                </Col>
                </>):
                (<>
                <Col
                    span={2}
                >
                    <MenuOutlined
                        onClick={showModal}
                     />
                    <Modal 
                        open={popup} 
                        onOk={handleOk} 
                        onCancel={handleCancel}
                        className={styles['navPopUp']}
                        footer={null}
                    >
                        <p>  
                            <NavLink 
                                to={HOME} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Home}
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to={SHOP} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Shop}
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to={ABOUT} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {About}
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to={CONTACT} 
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? 600 : "",
                                    };
                                }}
                            >
                                {Contact}
                            </NavLink>
                        </p>
                    </Modal>
                </Col>  
                </>)}
            </Row>
        </Layout.Header>
    )
}

export default Header


