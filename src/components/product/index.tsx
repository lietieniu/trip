import * as React from 'react';
import ProductCollection from './product';
import { Typography, Spin } from 'antd';

import { productList1, productList2, productList3 } from './mockups';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
// 引入axios
import axios from 'axios';
import { RootState } from '../../redux/store'

import { connect } from 'react-redux';
import { recomProductState } from '../../redux/recommendProducts/recomProductsReducer';
import * as types from '../../redux/recommendProducts/action'

const mapStateToProps = (state: any) => {
    return {
        recomProductReducer: state.recomProductReducer
    }
}
interface IProductProps {
    recomProductReducer: recomProductState,
    // action操作对象
    // recommendStart: Function,
    // recommendSuccess: Function,
    // recommendFail: Function
    giveMeData:Function
}

const Products: React.FunctionComponent<IProductProps> = (props) => {
    let { productList, loading, error } = props.recomProductReducer
    let {giveMeData} = props;

    React.useEffect(() => {
        // action 异步操作对象
        giveMeData()
    }, [])
    
    //列表为空,数据当期，数据加载loading
    if (loading) {
        return <Spin
            size='large'
            style={{
                display: 'block',
                margin: '0 auto',
                marginTop: '200',
                width: '100%'
            }}
        />
    }
    // 请求错误的情况下
    // if (error) {
    //     return <Typography.Title type='danger' level={3}>网站出错:{error}</Typography.Title>
    // }

    return (
        <div>
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
        </div>
    );
};

export default connect(mapStateToProps, types)(Products);
