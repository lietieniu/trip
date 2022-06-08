import * as React from 'react';
import './index.css';
import { Row, Col, Affix, Typography } from 'antd';
//全局布局样式
import MainLayout from '../../layouts/mainLayout';
//import ProductList from '../../components/productList'
import PaymentCard from '../../components/paymentCard/PaymentCard';//引入支付卡片组件

import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { clearShoppingCart, checkout } from '../../redux/shoppingCart/slice';
import { useHistory } from 'react-router-dom'

// 注意:发送查看购物车请求时，不在本页面进行请求,为保证其他的添加和删除购物车能够实时的更新
// 要在入口组件App.ts中发送查看请求,因为每次都会重新渲染组件,进行请求
// 本页面可以查看订单信息,和删除订单
interface IShoppingCartProps {
}

const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (props) => {
    //1.购物车工具+状态信息
    const loading = useSelector(s => s.shoppingCart.loading);
    const shoppingCartItems = useSelector(s => s.shoppingCart.items);
    const jwt = useSelector(s => s.user.token) as string;
    const dispatch = useDispatch();
    //2.下单支付工具
    const history = useHistory();
     

    return (
        <MainLayout>
            <Row>
                {/*1.购物车清单 */}
                <Col span={16}>
                    <div className='product-list-container'>
                        {/* <ProductList data={shoppingCartItems.map(s=>s.touristRoute)}/> */}
                    </div>
                </Col>

                {/*2.支付卡组件*/}
                <Col span={8}>
                    <Affix>
                        <div className='payment-card-container'>
                            <PaymentCard
                                loading={loading}
                                //1.总价
                                originalPrice={
                                    shoppingCartItems.map((s) => s.originalPrice)
                                        .reduce((a, b) => a + b, 0)
                                }
                                //2.折扣过后的价格
                                price={
                                    shoppingCartItems.map((s) => s.originalPrice *
                                        (s.discountPresent ? s.discountPresent : 1))
                                        .reduce((a, b) => a + b, 0)
                                }
                                // 3.下单处理(要做个预处理,购物车不为空才能触发下单)
                                onCheckout={() => {
                                    // 没有订单直接return
                                    if(shoppingCartItems.length<=0){
                                        return
                                    }
                                    // dispatch(checkout(jwt))
                                    history.push('/placeOrder')
                                }}
                                // 4.清空订单函数
                                onShoppingCartClear={() => {
                                    // dispatch(clearShoppingCart({
                                    //     jwt,
                                    //     itemIds:shoppingCartItems.map((s)=>s.id)
                                    // }))
                                }}
                            />

                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    );
};

export default ShoppingCart;
