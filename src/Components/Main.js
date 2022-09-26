import React, { Component } from "react";
import '../../node_modules/antd/dist/antd.css';
import { Breadcrumb, Button, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

export class Main extends Component {
  render() {
    let windowHeight = window.innerHeight;
    return (
      <Layout style={{ minHeight: windowHeight }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="logo" /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Home']}
            items={new Array(1).fill(null).map((_, index) => ({
              key: 'Home',
              label: `Home`,
            }))}
          />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>Home</Breadcrumb.Item>
         <Breadcrumb.Item>List</Breadcrumb.Item>
         <Breadcrumb.Item>App</Breadcrumb.Item>
       </Breadcrumb> */}
          <div className="site-layout-background" style={{ padding: 24 }}>
            Welcome to integral system.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@2022 Score Cloud Of YG</Footer>
      </Layout>
    )
  }
};