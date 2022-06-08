import * as React from 'react';
// import { PaymentForm } from '../../components/paymentForm/PaymentForm';
// import { CheckOutCard } from '../../components/checkOutCard/CheckOutCard';
import MainLayout from '../../layouts/mainLayout';
import { Col, Row } from 'antd';
// 
import {useSelector} from '../../redux/hooks';
import {useDispatch} from 'react-redux';
import {placeOrder} from '../../redux/order/slice'

interface IPlaceOrderProps {
}

const PlaceOrder: React.FunctionComponent<IPlaceOrderProps> = (props) => {
    const jwt=useSelector(s=>s.user.token) as string;
    const loading=useSelector(s=>s.order.loading);
    const order=useSelector(s=>s.order.currentOrder);
    const dispatch=useDispatch();
    return (
        <MainLayout>
            <Row>
                <Col span={12}>
                    {/* <PaymentForm/> */}
                </Col>
                <Col span={12}>
                    {/* <CheckOutCard
                     loading={loading}
                     order={order}
                     onCheckout={()=>{
                         dispatch(placeOrder({jwt,orderId:order.id}))
                     }}
                    /> */}
                </Col>
            </Row>
        </MainLayout>
    );
};

export default PlaceOrder;
