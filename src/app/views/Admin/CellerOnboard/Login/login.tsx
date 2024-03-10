import React, { useEffect,useState,useRef, useCallback} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import firebase from 'firebase/compat/app';
import {Auth,database} from '../../../../utils/FirebaseConfig/firebaseConfig';
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
import Cookies from 'universal-cookie';

const cookies = new Cookies();
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
    const  [LoaderVisible,setLoaderVisible] =  useState(false)
    const [errors, setErrors] = useState<string[]>([]);
    const LogiedIn = useNavigate();
    const [login, setLogin] = useState(false);
    const goSignUp =()=>{
        setSign(prevState => !prevState);
        form.resetFields();
    }
    const LoginFromHandler: any = useCallback(
        async (values: any ) => {
            const email = values?.email
            const password = values?.password
            const userName = values?.userName
            const contactNumber = values?.telName
            const userEmail = values?.userName
            const userPassword = values?.UserPassword
            setLoaderVisible(true) 
            try {
                if(userEmail && userPassword) {
                    const userCredential = await signInWithEmailAndPassword(Auth, userEmail, userPassword);
                    const user = userCredential.user;
                    if (user) {
                        user.getIdToken().then(function(accessToken) {
                          cookies.set('accessToken',accessToken)
                        //   localStorage.setItem('oldPath', window.location.pathname);
                        });
                    }
                    LogiedIn('/about')
                }else {
                    const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
                    await updateProfile(userCredential.user, {
                        displayName: userName,
                        phoneNumber: contactNumber
                    } as any)
                    setSign(true)
                }
                setLoaderVisible(true) 
                form.resetFields();
            } catch (error:any) {
                console.error('Error registering user:', error);
                const errorMessage = error.message || error.code;
                setErrors([...errors, errorMessage] as string[]);
            }  finally {
                setLoaderVisible(false)
            }
        }, []
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
                                    { isSign? 'NO Account ? ':'Have an Account ?'}
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
                                loading={LoaderVisible}
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