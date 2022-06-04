import * as React from 'react';
import './index.css'
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'

interface IResigerFormProps {
}

const ResigerForm: React.FunctionComponent<IResigerFormProps> = (props) => {
    //1.获取表单Dom元素
    const [form] = Form.useForm()
    const form1 = React.useRef()
    //2.表单完成事件
    const history = useHistory()
    const onFinish = async () => {
        let value = form.getFieldsValue();
        // 请求成功的状态码为204--body无任何内容
        try {
            await axios.post("https://mock.mengxuegu.com/mock/6260234066abf914b1f1c436/dc/set/shouquan", {
                username: value.username,
                password: value.password,
                consfirm: value.confirm
            });

            message.success("用户创建成功,请登录一下吧!");
            setTimeout(() => {
                history.push('/sign')
            }, 1000)

        } catch (error) {
            message.error("创建失败!")
        }

    };
    //3.表单未完成事件
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='form'>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                // 
                className='form-container'
                form={form} //表单form元素

            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请输入确认密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码不一致'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />

                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>

                    <Checkbox>Remember me</Checkbox>

                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                    <Link to="/sign" style={{ marginLeft: '15px', display: 'inline' }}>已有账号?直接登录</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ResigerForm;
