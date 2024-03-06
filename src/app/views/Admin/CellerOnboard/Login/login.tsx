import React, { useEffect,useState,useRef, useCallback} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {database} from '../../../../components/FirebaseConfig/firebaseConfig';
import firebase from 'firebase/app';
import { useNavigate } from "react-router-dom";
import styles from './login.module.scss';
import { 
    Row,
    Layout,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Image
} from "antd";
import { constantsText } from "../../../../constants/constant";
import loginBanner from '../../../../assets/img/png/login-bg.png';
import { NavLink } from "react-router-dom";
import google from '../../../../assets/img/svg/google.svg'
import faceBook from '../../../../assets/img/svg/Facebook.svg'
import apple from '../../../../assets/img/svg/apple.svg'

const {
    LOGIN: {
        LogoSection,
        SIGNUP,
        SIGNIN
    }
} = constantsText

const Login  = () => {
    const [form] = Form.useForm();
    const [isSign, setSign] = useState(true)
    const [CpasswordVisible, CsetPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [LpasswordVisible, LsetPasswordVisible] = useState(false);
    const history = useNavigate();
    const [login, setLogin] = useState(false);
    const goSignUp =()=>{
        setSign(prevState => !prevState);
    }
    const LoginFromHandler: any = useCallback(
        (values: any ) => {
            console.log(values)
            const email = values?.email
            const password = values?.password
            createUserWithEmailAndPassword(database, email, password)
            .then((data) => {
                 console.log(data, "authData");
                // history("/");
                setSign(true)
            })
            .catch((err) => {
                alert(err.code);
                setLogin(true);
            });
    
        },[]
    );

    return (
        <Layout
            className={styles['login']}
            style={{
                backgroundImage: `url(${loginBanner})`,
                paddingBottom: isSign ? '32px' : '30px',
            }}
        > 
            <Row
                className={styles['loginWrapper']}
            >
                <Col  
                    offset={12}
                    span={8}
                    className={styles['loginFprm']}
                >
                    <Row>
                        <Col
                            span={17}
                        >
                            <Row>
                                <Typography.Title
                                    level={5}
                                >  
                                    Welcome to <b>{LogoSection}</b>
                                </Typography.Title>
                            </Row>
                            <Row>
                                <Typography.Title
                                    level={2}
                                >  
                                    {isSign ? SIGNIN?.SignIn : SIGNUP?.SignUp}
                                </Typography.Title>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                        <Col
                            span={5}
                        >
                            <Row>
                                <Typography.Paragraph
                                    className={styles['signIn']}
                                >  
                                    NO Account ? 
                                    <NavLink 
                                        to ='#'
                                        onClick={goSignUp}
                                    > 
                                        {isSign? SIGNUP?.SignUp : SIGNIN?.SignIn}
                                    </NavLink>
                                </Typography.Paragraph>
                            </Row>
                        </Col>
                    </Row>
                    {isSign && (
                    <Row
                        className={styles['socialLogin']}
                        gutter={[16, 16]}
                    >
                        <Col
                            span={12}
                            className={styles['cl1']}
                        >
                            <Row
                                className={styles['gWrapper']}
                            >
                                <Col
                                    span={6}
                                >
                                    <Image
                                        width={20}
                                        src={google}
                                        preview={false}
                                    />
                                </Col>
                                <Col
                                  span={18}
                                >
                                    {SIGNIN?.gSign}
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            span={5}
                            className={styles['cl2']}
                        >
                            <Image
                                width={20}
                                src={faceBook}
                                preview={false}
                            />
                        </Col>
                        <Col
                            span={5}
                            className={styles['cl3']}
                        >
                            <Image
                                width={20}
                                src={apple}
                                preview={false}
                            />
                        </Col>
                    </Row>
                    )}
                    <Row
                        className={styles['formWrapper']}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            name="basic"
                            className={styles['form']}
                            id="signIn"
                            onFinish={(values) => LoginFromHandler(values)}
                        >
                            {isSign ? (
                            <>   
                                <Form.Item
                                    label={SIGNIN?.UserNameLAbel}
                                    name={SIGNIN?.UserName}
                                    rules={SIGNIN?.UserNameRules}
                                    >
                                    <Input placeholder={SIGNIN?.UplaceHolder} />
                                </Form.Item>
                                <Form.Item
                                    label={SIGNIN?.PasswordLabel}
                                    name={SIGNIN?.PasswordName}
                                    rules={SIGNIN?.PasswordRules}
                                    >
                                    <Input.Password 
                                        placeholder={SIGNIN?.PplaceHolder} 
                                        visibilityToggle={{ visible: LpasswordVisible, onVisibleChange: LsetPasswordVisible }}
                                    />
                                </Form.Item>
                            </> 
                            ):(
                                <> 
                                    <Form.Item
                                        label={SIGNUP?.EmailLabel}
                                        name={SIGNUP?.EmailName}
                                        rules={SIGNUP?.EmailRules}
                                    >
                                        <Input placeholder={SIGNUP?.EplaceHolder} />
                                    </Form.Item>
                                    <Row
                                        gutter={[16,16]}
                                    >
                                        <Col
                                            span={12}
                                        >
                                            <Form.Item
                                                label={SIGNUP?.UserName}
                                                name={SIGNUP?.Uname}
                                                rules={SIGNUP?.UserNameRules}
                                                >
                                                <Input placeholder={SIGNUP?.Uplaceholder} />
                                            </Form.Item>
                                        </Col>
                                        <Col
                                            span={12}
                                        >
                                            <Form.Item
                                                label={SIGNUP?.TeleNo}
                                                name={SIGNUP?.Tname}
                                                rules={SIGNUP?.TeliNameRules}
                                                >
                                                <Input placeholder={SIGNUP?.Tplaceholder} />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row
                                        gutter={[16,16]}
                                    >
                                        <Col
                                            span={12}
                                        >
                                            <Form.Item
                                                label={SIGNUP?.PasswordLabel}
                                                name={SIGNUP?.PasswordName}
                                                rules={SIGNUP?.PasswordRules}
                                                >
                                                <Input.Password 
                                                    placeholder={SIGNUP?.PplaceHolder}
                                                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col
                                            span={12}
                                        >
                                            <Form.Item
                                                label={SIGNUP?.CPasswordLabel}
                                                name={SIGNUP?.CPasswordName}
                                                dependencies={SIGNUP?.dependencies}
                                                rules={SIGNUP?.Cpasswordrules}
                                                style={{
                                                    borderRadius:'10px'
                                                }}
                                            >
                                                <Input.Password 
                                                    placeholder={SIGNUP?.CPplaceHolder} 
                                                    visibilityToggle={{ visible: CpasswordVisible, onVisibleChange: CsetPasswordVisible }}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </>
                            )}
                        </Form> 
                    </Row>
                    <Row
                        className={styles['submitSection']}
                    >
                        <Col
                            offset={16}
                        >   {isSign &&  (
                                <NavLink 
                                    to ='/admin'
                                > 
                                    {SIGNIN?.Fpassword}
                                </NavLink>
                            )}
                            <Button
                                form="signIn"
                                htmlType="submit"
                            >
                                Sign in
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Layout>
    )
}

export default Login;