import * as React from 'react';
// import './index.css'
// 1.头部部分
import Header from '../../components/header/Header';
// 2.底部
import Footer from '../../components/footer/Footer';
// 3.侧边导航栏
import SideMenu from '../../components/sideMenu';
// 4.走马灯
import Carousel from '../../components/carousel';
// 5.产品区
// import ProductCollection from '../../components/product/product';
// 6.合作企业
import BussinessPartner from '../../components/bussinessPartner'
// 栅格布局
import { Row, Col, Typography, Spin } from 'antd';
import { JsxElement } from 'typescript';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import MainLayout from '../../layouts/mainLayout'

interface IHomeProps {
    children: any
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    // const [productList, setProductList] = React.useState([]);
    // const [loading, setLoading] = React.useState(true);
    // const [error, setError] = React.useState(null)
    // React.useEffect(() => {
    //     renderHome()
    // }, [])
    // const renderHome = async () => {
    //     try {
    //         let { data } = await axios.get("http://123.56.149.216:8080/api/productCollections", {
    //             headers: {
    //                 "x-icode": "FB80558A73FA658E",
    //             }
    //         });
    //         setProductList(data);
    //         setLoading(false);
    //         setError(null)
    //     } catch (error: any) {
    //         setError(error.message);
    //         setLoading(false);

    //     }
    // };
    // //列表为空,数据当期，数据加载loading
    // if (loading) {
    //     return <Spin
    //         size='large'
    //         style={{
    //             display: 'block',
    //             margin: '0 auto',
    //             marginTop: '200',
    //             width: '100%'
    //         }}
    //     />
    // }
    // 请求错误的情况下
    // if (error) {
    //     return <Typography.Title type='danger' level={3}>网站出错:{error}</Typography.Title>
    // }


    return (
        <MainLayout>
             {/* 2.1侧边导航 */}
             <Row style={{ marginTop: 15 }}>
                    <Col span={6}>
                        <div>
                            <SideMenu />
                        </div>
                    </Col>
                    <Col span={18}>
                        <div>
                            <Carousel />
                        </div>
                    </Col>
                </Row>

                {props.children}

                {/* 3.合作企业 */}
                <BussinessPartner />
            
        </MainLayout>
    );
};

export default Home;
