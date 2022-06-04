import * as React from 'react';
import './index.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
// 
import {signIn} from '../../redux/user/slice';
import {useSelector} from '../../redux/hooks';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

interface ISignFormProps {
}

const SignForm: React.FunctionComponent<ISignFormProps> = (props) => {
    //1.获取state里面的状态
    const loading=useSelector(s=>s.user.loading);
    const jwt=useSelector(s=>s.user.token);
    const error=useSelector(s=>s.user.error);
    // 2.获得dispatch
    const dispatch=useDispatch()
    const history=useHistory();
    //
    useEffect(()=>{
      if(jwt!==null){
          history.push('/');//jwt发生改变且不为空,，标识用户登录成功
      }
    },[jwt])    
    const onFinish = (values: any) => {
        // 点击登录按钮发送dispatch
    //    dispatch(signIn({
    //        email:values.username,
    //        password:values.password
    //    }))
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="" style={{fontSize:'13px'}}>
                    忘记密码?
                </a>
            </Form.Item>

            <Form.Item>
                <Link to='/resiger' style={{paddingRight:'26px'}}>去注册</Link>
                <Button type="primary" htmlType="submit" loading={loading}>
                   登录
                </Button>
              
            </Form.Item>
        </Form>
    );
};

export default SignForm;
