import React, {Component} from "react";
import {Button, Form, Input, Layout} from "antd";
import {Footer} from "antd/lib/layout/layout";
import axios from 'axios';

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

export class Register extends Component {
    onFinish(values) {
        console.log(JSON.stringify(values));
        axios.post("api/User/register", JSON.stringify(values), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data);
        })
    }

    render() {
        let windowHeight = window.innerHeight;
        return (<Layout style={{minHeight: windowHeight}}>
            <Layout>
                <div style={{width: '100%', padding: '10% 30%'}}>
                    <div style={{
                        padding: '10px 0',
                        fontSize: '16px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderBottom: '1px solid #eee'
                    }}>
                        <b>Register</b>
                    </div>
                    <div style={{backgroundColor: '#fff', padding: '30px'}}>
                        <Form {...formItemLayout} name="register" onFinish={this.onFinish} scrollToFirstError>
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
                                <Button type='primary' htmlType='submit'>Register</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
            <Footer style={{textAlign: 'center'}}>@2022 Score Cloud Of YG</Footer>
        </Layout>);
    }
}