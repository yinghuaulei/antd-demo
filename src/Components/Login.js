import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Layout, Modal} from 'antd';
import {Footer} from 'antd/lib/layout/layout';
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
        setLoading(() => {
            return true
        })
        axios.post("api/User/login", JSON.stringify(values), {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((userToken) => {
            localStorage.setItem("token", userToken);
            const modal = Modal.success({
                title: '登录成功！', onOk: () => {
                    navigate('/')
                }
            })
            setTimeout(() => {
                modal.destroy()
                navigate('/')
            }, 5000)
        }).finally(() => setLoading(() => {
            return false
        })).catch(e => {
            Modal.error({
                title: e.message, content: JSON.stringify(e.response.data)
            })
        })
    }

    let windowHeight = window.innerHeight;
    return (<Layout style={{minHeight: windowHeight}}>
        <Layout>
            <div style={{width: '100%', padding: '10% 39%'}}>
                <div style={{padding: '40px 30px', backgroundColor: '#fff'}}>
                    <div style={{paddingBottom: '20px', fontSize: '16px'}}>
                        <b>Sign In</b>
                    </div>
                    <Form name="normal_login" className="login-form" initialValues={{remember: true}}
                          onFinish={onFinish}>
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
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                                Log in
                            </Button>
                            <a href='register' style={{marginLeft: '10px'}}>register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
        <Footer style={{textAlign: 'center'}}>@2022 Integral System Of YG</Footer>
    </Layout>);
}

export default Login