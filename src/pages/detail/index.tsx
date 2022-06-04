import * as React from 'react';
import './index.css';

import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { Typography, Spin, Row, Col, DatePicker, Divider, Menu, Anchor } from 'antd';
import axios from 'axios';
// 引入头部和底部组件复用代码
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// 产品简介组件
import ProductIntro from '../../components/productIntro';
// 引入评论组件
import ProductComment from '../../components/productComment';
import { commentMockData } from './mockup';
// immer写法 简化redux
import { productDetailSlice } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
//
import MainLayout from '../../layouts/mainLayout';

// 日期截至框
const { RangePicker } = DatePicker
const { Link } = Anchor

interface IDetailProps {
    match: any
}

const Detail: React.FunctionComponent<IDetailProps> = (props) => {
    // 1.创建初始三种数据状态
    // const [loading, setLoading] = React.useState<Boolean>(false);
    // const [product, setProduct] = React.useState<any>(null);
    // const [error, setError] = React.useState<string | null>(null);

    const loading = useSelector(state => state.productDetail.loading);
    const data = useSelector(state => state.productDetail.data);
    const error = useSelector(state => state.productDetail.error)
    const dispatch = useDispatch();

    // 2.产品对应的Id值
    let { orderDetailId } = props.match.params
    // 页面初始化渲染
    React.useEffect(() => {
        renderDetailPage()
    }, []);
    const renderDetailPage = async () => {
        //    Redux-Tookit 写法一
        // dispatch(getProductDetail(orderDetailId))

        // 写法二：
        // dispatch(productDetailSlice.actions.fetchStart())
        // try {
        //     let { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${orderDetailId}`, {
        //         headers: {
        //             "x-icode": "FB80558A73FA658E"
        //         }
        //     });
        //     // setProduct(data.product); 
        //     // setLoading(false)
        //     dispatch(productDetailSlice.actions.fetchSuccess(data))
        // } catch (error: any) {
        //     // setError(error.message);
        //     // setLoading(false)
        //     dispatch(productDetailSlice.actions.fetchFail(error.message))
        // }
    }
    if (loading) {
        return <Spin
            size='large'
            style={{
                display: 'block',
                margin: '260px auto 100px'
            }}
        />
    }
    // if (error) {
    //     return <h1>错误信息:{error}</h1>
    // }
    const onChange = (value: any, dateString: any) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    return (
        <MainLayout>
            {/*1.产品简介与日期选择  */}
            <div className='product-intro-container'>
                <Row>
                    <Col span={13}>
                        {/* 产品简介 */}
                        {/* <ProductIntro/> */}
                    </Col>
                    <Col span={11} >
                        <RangePicker
                            open
                            style={{ marginTop: '20px' }}
                            onChange={onChange}

                            format="YYYY-MM-DD" />
                    </Col>
                </Row>
            </div>
            {/* 2.锚点菜单 */}
            <Anchor className='product-detail-anchor'>
                <Menu mode='horizontal'>
                    <Menu.Item key={0}>
                        <Link href='#feature' title="产品特色" />
                    </Menu.Item>
                    <Menu.Item key={1}>
                        <Link href='#fees' title="费用" />
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link href='#notes' title="预定须知" />
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link href='#comments' title="商品评价" />
                    </Menu.Item>
                </Menu>
            </Anchor>
            {/* 3.产品特色 */}
            <div id='feature' className='product-detail-container'>
                <Divider orientation='center'>
                    <Typography.Title level={3} type="secondary">产品特色</Typography.Title>
                </Divider>
                {/* 将传递过来的html标签页面进行解析 */}
                {/* <div dangerouslySetInnerHTML={{__html:product.features}}></div> */}
            </div>
            {/* 4.费用 */}
            <div id='fees' className='product-detail-container'>
                <Divider orientation='center'>
                    <Typography.Title level={3} type="danger">费用</Typography.Title>
                </Divider>
                {/* 将传递过来的html标签页面进行解析 */}
                {/* <div dangerouslySetInnerHTML={{__html:product.features}}></div> */}
            </div>
            {/* 5.预定须知 */}
            <div id='notes' className='product-detail-container'>
                <Divider orientation='center'>
                    <Typography.Title level={3} type="success">预定须知</Typography.Title>
                </Divider>
                {/* 将传递过来的html标签页面进行解析 */}
                {/* <div dangerouslySetInnerHTML={{__html:product.features}}></div> */}
            </div>
            {/* 6.商品评价 */}
            <div id='comments' className='product-detail-container'>
                <Divider orientation='center'>
                    <Typography.Title level={3} type="warning">商品评价</Typography.Title>
                </Divider>
                <div style={{ margin: 10 }}>
                    <ProductComment data={commentMockData} />
                </div>
            </div>
        </MainLayout>
    );
};

export default Detail;



