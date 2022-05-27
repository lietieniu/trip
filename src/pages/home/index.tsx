import * as React from 'react';
import './index.css'
// 1.头部部分
import Header from '../../components/header/Header';
// 2.底部
import Footer from '../../components/footer/Footer';
// 3.侧边导航栏
import SideMenu from '../../components/sideMenu';
// 4.走马灯
import Carousel from '../../components/carousel';
// 5.产品区
import ProductCollection from '../../components/product';
// 6.合作企业
import BussinessPartner from '../../components/bussinessPartner'
// 栅格布局
import { Row, Col, Typography } from 'antd';

import { productList1, productList2, productList3 } from '../mockups';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className='App'>
            {/* 1.头部Header */}
            <Header />

            {/* 2.content */}
            <div className='page-content'>
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
                {/*2.2 产品区 */}
                <ProductCollection
                    title={<Typography.Title level={3} type="success">爆款推荐</Typography.Title>}
                    sideImage={sideImage}
                    products={productList1}
                />
                <ProductCollection
                    title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
                    sideImage={sideImage2}
                    products={productList2}
                />
                <ProductCollection
                    title={<Typography.Title level={3} type="secondary">国内游推荐</Typography.Title>}
                    sideImage={sideImage3}
                    products={productList3}
                />
                {/* 3.合作企业 */}
                <BussinessPartner />
            </div>
            {/* 3.Footer底部 */}
            <Footer />

        </div>
    );
};

export default Home;
