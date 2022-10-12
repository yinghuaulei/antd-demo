import React, {useState} from "react";
import {Button, Form, Input, Layout, Modal} from "antd";
import {Footer} from "antd/lib/layout/layout";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const formItemLayout = {
    labelCol: {
        xs: {span: 24}, sm: {span: 8},
    }, wrapperCol: {
        xs: {span: 24}, sm: {span: 16},
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24, offset: 0,
        }, sm: {
            span: 16, offset: 8,
        },
    },
};

let loading = false;

const Register : React.FC = () => {
    const [loadings, setLoadings] = useState(false);

    const navigate = useNavigate();

    const onFinish = (self, values) => {
        setLoadings()
        axios.post("api/User/register", JSON.stringify(values), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            Modal.success({
                title: '注册成功！'
            })
            navigate("/login");
        }).finally(() => loading = false).catch(e => {
            Modal.error({
                title: e.message, content: JSON.stringify(e.response.data)
            })
        })
    }

    let windowHeight = window.innerHeight;
    return (<Layout style={{minHeight: windowHeight}}>
        <Layout>
            <div style={{width: '100%', padding: '10% 30%'}}>
                <div style={{
                    padding: '10px 10px',
                    fontSize: '16px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #eee'
                }}>
                    {/*<Navigate to={{pathname: 'login'}} style={{float: "left", fontSize: '15px'}}>&lt;-Back</Navigate>*/}
                    <a href="login">&lt;-Back</a>
                    <b>Register</b>
                </div>
                <div style={{backgroundColor: '#fff', padding: '30px'}}>
                    <Form {...formItemLayout} name="register" onFinish={(values) => onFinish(this, values)}
                          scrollToFirstError>
                        <Form.Item name="email" label="E-mail"
                                   rules={[{type: 'email', message: 'The input is not valid E-mail!'}, {
                                       required: true, message: 'please input you E-mail!'
                                   }]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name='username' label='Username'
                                   rules={[{
                                       required: true, message: 'please input you Username!', whitespace: true
                                   }]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name='nickname' label='Nickname'
                                   rules={[{
                                       required: true, message: 'please input you Nickname!', whitespace: true
                                   }]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name='password' label='Password'
                                   rules={[{required: true, message: 'please input you Password!'}]}
                                   hasFeedback>
                            <Input type='password'/>
                        </Form.Item>

                        <Form.Item name='confirm' label='Confirm Password' dependencies={['password']}
                                   rules={[{
                                       required: true, message: 'please input you Password!'
                                   }, ({getFieldValue}) => ({
                                       validator(_, value) {
                                           if (!value || getFieldValue('password') === value) {
                                               return Promise.resolve();
                                           }
                                           return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                       }
                                   })]} hasFeedback>
                            <Input type='password'/>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type='primary' htmlType='submit' loading={loadings}>Register</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
        <Footer style={{textAlign: 'center'}}>@2022 Score Cloud Of YG</Footer>
    </Layout>);
}

export default Register