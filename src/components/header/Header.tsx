import * as React from 'react';
import './Header.css'
import logo from '../../assets/logo.svg';
import { Button, Input, Layout, Typography, Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons'

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <div className='app-header'>
        {/* 一级Header */}
        <div className="top">
          <div className='top-header'>
            <Typography.Text style={{ color: 'darkred' }}>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              overlay={
                <Menu
                 items={
                   [
                     {label:'中文',key:'1'},
                     {label:'英文',key:'2'},
                   ]
                 }>
                 
                </Menu>
              }
              icon={<GlobalOutlined />}
              style={{ marginLeft: 15 }}
            >
              语言
            </Dropdown.Button>

            {/* 按钮组 */}
            <Button.Group className='button-group' style={{ marginTop: '4px' }}>
              <Button>登录</Button>
              <Button>注册</Button>
            </Button.Group>
          </div>
        </div>

        {/* 2.二级header */}
        <Layout.Header className='main-header'>
          <img src={logo} alt="" className='app-logo' />
          <Typography.Title level={3} className='app-title'>React 旅游网</Typography.Title>
          <Input.Search placeholder='请输入旅游的目的地,主题，或关键字' className='app-search'></Input.Search>
        </Layout.Header>
        {/* 3.水平导航菜单 */}
        <Menu mode={'horizontal'} className='menu1'>
          <Menu.Item>周末游</Menu.Item>
          <Menu.Item>旅游首页</Menu.Item>
          <Menu.Item>一日游</Menu.Item>
          <Menu.Item>邮轮</Menu.Item>
          <Menu.Item>酒店</Menu.Item>
          <Menu.Item>飞机票</Menu.Item>
          <Menu.Item>国内游</Menu.Item>
          <Menu.Item>国外游</Menu.Item>
          <Menu.Item>拼团</Menu.Item>
          <Menu.Item>情侣</Menu.Item>
          <Menu.Item>玩乐+学习</Menu.Item>
          <Menu.Item>全家出动</Menu.Item>
          <Menu.Item>旅游首页</Menu.Item>
          <Menu.Item>一日起</Menu.Item>
          <Menu.Item>全家出动</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
