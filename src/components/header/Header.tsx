import React, { useState, useEffect } from 'react';
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

import { connect, useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import * as types from '../../redux/language/languageAction';

//引入jwt解码，jwt的类型
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode';
import { userSlice } from '../../redux/user/slice';
// 创建jwt接口类型
interface jwtPayload extends DefaultJwtPayload {
  username: string
};

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

  // 解码jwt,显示用户的状态信息/购物车
  const dispatch = useDispatch();
  const jwt = useSelector(s => s.user.token); //获得jwt
  const [username, setUsername] = useState('');
  // useEffect监控我们这个jwt的变化
  useEffect(() => {
    if (jwt !== null) { //jwt存在时,
      const Token = jwt_decode<jwtPayload>(jwt) //Token是解码后的一个js对象
      setUsername(Token.username);//获得Token中的用户名
    }
  }, [jwt])

  // 用户注销函数(用户注销，就是将reducer函数中的当前的state.jwt设置为null,jwt变化页面重新render,就注销了)
  // 因为登录页面和header头部页面中的useEffect都根据传递过来的jwt进行监听
  const loginOut = () => {
    dispatch(userSlice.actions.loginOut());
    history.push("/") //注销删除当前的jwt之后,进行重新进入主页,就按照没有jwt的样式进行渲染
  };

  // 引入购物车订单信息+状态
  const shoppingCartItems = useSelector(s => s.shoppingCart.items);
  const shoppingCartLoading = useSelector(s => s.shoppingCart.loading);

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
            {
              //如果jwt存在，在显示用户的详情内容即ui展示
              jwt ? <Button.Group className='button-group'>
                <span>
                  {t("header.welcome")}
                  <Typography.Text strong>{username}</Typography.Text>

                  <Button onClick={loginOut}>{t('header.signOut')}</Button>
                </span>
              </Button.Group> :
                // jwt不存在是显示这个
                <Button.Group className='button-group' style={{ marginTop: '4px' }}>
                  <Button
                    onClick={() => { history.push('/shoppingCart') }}
                    loading={shoppingCartLoading} //loading状态
                  >
                    购物车({<span style={{ color: 'red' }}>{shoppingCartItems.length}</span>})
                  </Button>
                  <Button onClick={() => { history.push('/sign') }}>{t('header.signin')}</Button>
                  <Button onClick={() => { history.push('/resiger') }}>{t('header.register')}</Button>
                </Button.Group>
            }
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
            onSearch={(keywords) => { history.push('/search/' + keywords) }}
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
