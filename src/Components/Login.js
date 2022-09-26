import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Layout} from 'antd';
import {Footer} from 'antd/lib/layout/layout';
import React, {Component} from 'react';

export class Login extends Component {
    onFinish(e) {
        console.log(e);
    }

    render() {
        let windowHeight = window.innerHeight;
        return (<Layout style={{minHeight: windowHeight}}>
            <Layout>
                <div style={{width: '100%', padding: '10% 39%'}}>
                    <div style={{padding: '40px 30px', backgroundColor: '#fff'}}>
                        <div style={{paddingBottom: '20px', fontSize: '16px'}}>
                            <b>Sign In</b>
                        </div>
                        <Form name="normal_login" className="login-form" initialValues={{remember: true}}
                              onFinish={this.onFinish}>
                            <Form.Item name="username"
                                       rules={[{required: true, message: 'Please input your Username!'}]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       placeholder="Username"/>
                            </Form.Item>
                            <Form.Item name="password"
                                       rules={[{required: true, message: 'Please input your Password!'}]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                       placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <a href='../Components/Main' style={{marginLeft: '10px'}}>register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
            <Footer style={{textAlign: 'center'}}>@2022 Integral System Of YG</Footer>
        </Layout>);
    }
}