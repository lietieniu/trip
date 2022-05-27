import * as React from 'react';
import './index.css';
import { sideMenuList } from './mock';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons'


interface IAppProps {
}

const SideMenu: React.FunctionComponent<IAppProps> = (props) => {
    return (
    <Menu mode='vertical' className='side-menu'>
        {
            sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`m-menu-${index}`}
                    title={
                        <span>
                            <GifOutlined />
                            {m.title}
                        </span>
                    }
                >
                    {
                        m.subMenu.map((sm, smindex) => (
                            <Menu.SubMenu
                                key={`sm-menu-${smindex}`}
                                title={
                                    <span>
                                        <GifOutlined />
                                        {sm.title}
                                    </span>
                                }
                            >
                                {
                                    sm.subMenu.map((sms, smsindex) => (
                                        <Menu.Item key={`sms-menu-${smsindex}`}>
                                            {sms}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu.SubMenu>
                        ))
                    }
                </Menu.SubMenu>
            ))
        }
    </Menu>
    )

};

export default SideMenu;
