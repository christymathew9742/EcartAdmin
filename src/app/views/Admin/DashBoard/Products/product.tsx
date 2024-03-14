import React, { useEffect,useState,useRef} from "react";
import styles from './product.module.scss';
import { Row,
    Typography,
    Layout,
    Col,
    Input,
    Form
} from "antd";
import {constantsText} from '../../../../constants/constant'
// import tinymce from 'tinymce/tinymce';
// import 'tinymce/icons/default';
// import 'tinymce/themes/silver';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/autoresize';
// import TextArea from "antd/es/input/TextArea";

const {
    ADDNEWPRODUCT: {
        MainTitle
    }  
} = constantsText;

const Products  = () => {
    const handleEditorChange:any = (content:any, editor:any) => {
        console.log('Content was updated:', content);
    };
    // React.useEffect(() => {
    //     tinymce.init({
    //       selector: '#ProductEditor',
    //       height: 500,
    //       menubar: false,
    //       plugins: ['paste', 'link', 'autoresize'],
    //       toolbar: 'undo redo | bold italic | link',
    //       setup: (editor) => {
    //         editor.on('change', (e) => {
    //           handleEditorChange(editor.getContent(), editor);
    //         });
    //       },
    //     });
    // }, []);
    const [form] = Form.useForm();
    const SubmitFromHandler = ()=>{

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
                id="signIn"
                onFinish={(values) => SubmitFromHandler()}
            >
                <Row
                    className={styles['productWrapper']}
                    justify="space-between"
                >
                    <Col
                        span={16}
                    >
                        <Form.Item
                            label={''}
                            name={''}
                        >
                            <Input placeholder='Product name' />
                        </Form.Item>
                        <Form.Item>
                            {/* <TextArea id="ProductEditor" /> */}
                        </Form.Item>
                    </Col>
                    <Col
                        span={7}
                        offset={1}
                    >
                    </Col>'
                </Row>
            </Form>
        </Layout>
    )
}

export default Products;