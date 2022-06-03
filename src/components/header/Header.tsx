import * as React from 'react';
import './Header.css'
import logo from '../../assets/logo.svg';
import { Button, Input, Layout, Typography, Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
// 路由中的钩子函数(获得对应api)
import { useHistory } from 'react-router-dom';
//Reducer函数中Language的接口规范
import { languageState } from '../../redux/language/languageReducer';
import { RootState } from '../../redux/store'
//
import { useTranslation, withTranslation } from 'react-i18next'

import { connect } from 'react-redux';
import * as types from '../../redux/language/languageAction'
const mapStateToProps = (state: any) => {
  return {
    Language: state.Language
  }
}
interface IAppProps {
  // languageState继承reducer函数中的接口规范
  Language: languageState,
  changeLanguage: Function,
  addLanguage: Function
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  // 1.获得指定api
  let history = useHistory();
  //2.获得store中的语言数据状态
  let { Language, changeLanguage, addLanguage } = props;
  let language = Language.language;
  let languageList = Language.languageList
  // 3.
  const { t } = useTranslation();
  return (
    <div>
      <div className='app-header'>
        {/* 一级Header */}
        <div className="top">
          <div className='top-header'>
            <Typography.Text style={{ color: 'darkred' }}>{t('header.slogan')}</Typography.Text>
            <Dropdown.Button
              overlay={
                <Menu
                  onClick={(e) => {
                    if (e.key === 'new') {
                      // 添加新语言的action
                      addLanguage({ label: '法语', key: "newone" })
                    } else {
                      changeLanguage(e.key)
                    }
                  }}
                  items={
                    languageList.concat([{ label: "添加新语言", key: "new" }])
                  }>

                  {/*[
                  {label:'中文',key:'zh},
                  {label:'英文',key:'en},
                ]*/}

                </Menu>
              }
              icon={<GlobalOutlined />}
              style={{ marginLeft: 15 }}
            >
              {language === 'zh' ? "中文" : "英文"}
            </Dropdown.Button>

            {/* 按钮组 */}
            <Button.Group className='button-group' style={{ marginTop: '4px' }}>
              <Button onClick={() => { history.push('/sign') }}>{t('header.signin')}</Button>
              <Button onClick={() => { history.push('/resiger') }}>{t('header.register')}</Button>
            </Button.Group>
          </div>
        </div>

        {/* 2.二级header */}
        <Layout.Header className='main-header'>
          <span onClick={() => { history.push("/") }}>
            <img src={logo} alt="" className='app-logo' />
            <Typography.Title level={3} className='app-title'>React 旅游网</Typography.Title>
          </span>
          <Input.Search 
          placeholder='请输入旅游的目的地,主题，或关键字' 
          className='app-search'
          onSearch={(keywords)=>{history.push('/search/'+keywords)}}
          >
           </Input.Search>
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

export default connect(mapStateToProps, types)(Header);
