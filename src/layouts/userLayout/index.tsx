import * as React from 'react';
import "./index.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
const { Header, Footer, Content } = Layout;


interface IUserLayoutProps {
    children: any
}

const UserLayout: React.FunctionComponent<IUserLayoutProps> = (props) => {
    const menu = (
        <Menu>
            <Menu.Item>中文</Menu.Item>
            <Menu.Item>English</Menu.Item>
        </Menu>
    );

    return (
        <Layout className="user-layout-container">
            <Header className="header">
                <div className="lang">
                    <Dropdown overlay={menu}>
                        <Button>
                            {" "}
                            选择语言 <CaretDownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Header>
            <Content className="content">
                <div className="top">
                    <div className="content-header">
                        <Link to="/">
                            <img alt="logo" className="logo" src={logo} />
                            <span className="title">React 旅游网</span>
                        </Link>
                    </div>
                    <div className="desc">
                        慕课网 是我朝最具影响力的 线上课程学习网站
                    </div>
                    
                    {/* 子内容 */}
                    {props.children}
                    
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Footer就不写了,太累了</Footer>
        </Layout>
    );
};

export default UserLayout;

