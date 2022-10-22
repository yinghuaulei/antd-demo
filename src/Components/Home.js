import 'antd/dist/antd.css';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const Home: React.FC = () => {
    const navigate = useNavigate();
    const handlerLogin = () => {
        navigate('/login')
    }

    const [collapsed, setCollapsed] = useState(false);
    let innerHeight = window.innerHeight;
    return (<Layout style={{minHeight: (innerHeight) + 'px'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[{
                    key: '1', icon: <UserOutlined/>, label: 'nav 1',
                }, {
                    key: '2', icon: <VideoCameraOutlined/>, label: 'nav 2',
                }, {
                    key: '3', icon: <UploadOutlined/>, label: 'nav 3',
                },]}
            />
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0, width: '100%'}}>
                <div style={{display: "flex"}}>
                    <div style={{width: '50%', paddingLeft: '10px'}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger', onClick: () => setCollapsed(!collapsed),
                        })}
                    </div>
                    <div style={{width: '50%', textAlign: 'right', paddingRight: '10px', fontSize: '10px'}}>
                        <Button style={{backgroundColor: '#001529', borderColor: '#001529', color: '#fff'}}
                                size='middle' onClick={() => handlerLogin()}>登录</Button>
                    </div>
                </div>
            </Header>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px', padding: 24, minHeight: 280,
                }}
            >
                Content
            </Content>
        </Layout>
    </Layout>);
};

export default Home;