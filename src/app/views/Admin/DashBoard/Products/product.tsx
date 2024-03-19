import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './product.module.scss';
import { debounce } from 'lodash';
import { getProductData } from "../../../../utils/utils";
import { Row,
    Typography,
    Layout,
    Col,
    Input,
    Form,
    Tabs,
    Select,
    Button
} from "antd";
import {
    SettingOutlined,
    BlockOutlined,
    BuildOutlined ,
    DashboardOutlined,
} from '@ant-design/icons';
import {constantsText} from '../../../../constants/constant'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { fetchPostProductRequest, fetchProductRequest } from "../../../../../redux/reducers/products/actions";
import { getProductSelector } from "../../../../../redux/reducers/products/selectors";
import Cookies from 'universal-cookie';

const TabPane = Tabs.TabPane;
const {
    ADDNEWPRODUCT: {
        MainTitle,
        MainTitleData,
        ContentData,
    },
    ROUTES: {
        PRODUCTS,
    }, 
}:any = constantsText;
const Products  = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const userToken:any = cookies.get('userToken');
    const dispatch = useDispatch();
    const productStore:any = useSelector(getProductSelector);
    const [editorData, setEditorData] = useState<string>('');
    const  [LoaderVisible,setLoaderVisible] =  useState(false)
    useEffect(() => {
        dispatch(fetchProductRequest(userToken))
    }, [userToken]); 

    const { Header} = Layout;
    const [form] = Form.useForm();
    const productFromHandler: any = useCallback(
        (values: any ) => {
            const productData = {
                userToken:userToken,
                mainTitle: values?.productTitle,
                description: editorData
            }
            try {
                if(values?.productTitle && productStore.status === true) {
                    dispatch(fetchPostProductRequest(productData));
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        navigate(PRODUCTS.ListProduct);
                    }, 1000);
                }
            } catch {

            } finally {

            }
        }, [editorData,userToken]
    );

    const callback = (key:any) => {
        console.log(key);
    }

    return (
        <Layout
            className={styles['addNewProduct']}
        >
            <Typography.Title
                level={2}
            >
                {MainTitle}
            </Typography.Title>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                className={styles['form']}
                id="postProductData"
                onFinish={(values) => productFromHandler(values)}
            >
                <Row
                    className={styles['productWrapper']}
                    justify="space-between"
                >
                    <Col
                        span={16}
                    >
                        <Form.Item
                            name={MainTitleData.Name}
                            rules={MainTitleData.Rules}
                        >
                            <Input placeholder={MainTitleData.Placeholder} />
                        </Form.Item>
                        <Form.Item
                            name={ContentData.Name}
                        >
                            <CKEditor
                                editor={ ClassicEditor }
                                data={editorData}
                                onChange={(event: any, editor: any) => {
                                    const data = editor.getData();
                                    setEditorData(data);
                                }}
                                config={{
                                    placeholder: ContentData.Placeholder}}
                            />
                        </Form.Item>
                        <Row
                            className={styles['tabWrapper']}
                        >
                            <Header>
                                <Row>
                                    <Typography.Title
                                        level={5}
                                    >
                                        Product Data
                                    </Typography.Title>
                                </Row>
                            </Header>
                            <Tabs 
                                onChange={callback} 
                                type="card"
                                tabPosition="left"
                                className={styles['tab']}
                            >
                                <TabPane icon ={<SettingOutlined/>} tab="General" key="1"> Content of Tab Pane 1</TabPane>
                                <TabPane icon={<BlockOutlined />} tab="Inventory" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane icon={<BuildOutlined />} tab="Attributes" key="3">Content of Tab Pane 3</TabPane>
                                <TabPane icon={<DashboardOutlined/>} tab="Advanced" key="4">Content of Tab Pane 4</TabPane>
                            </Tabs>
                        </Row>
                    </Col>
                    <Col
                        span={7}
                        offset={1}
                    >
                        <Row>
                            <Button
                                form="postProductData"
                                htmlType="submit"
                                loading={LoaderVisible}
                            >
                                Submit
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Layout>
    )
}

export default Products;