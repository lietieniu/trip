import * as React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import './index.css'

import image1 from '../../assets/images/facebook-807588_640.png';
import image2 from '../../assets/images/follow-826033_640.png';
import image3 from '../../assets/images/icon-720944_640.png';
import image4 from '../../assets/images/microsoft-80658_640.png';

const imageList = [
    { src: image4, title: "microsoft" },
    { src: image1, title: "facebook" },
    { src: image2, title: "follow" },
    { src: image3, title: "icon" },
   

]

interface IBussinessPartnerProps {
}

const BussinessPartner: React.FunctionComponent<IBussinessPartnerProps> = (props) => {
    return (
        <div className='bussiness'>
            <Divider orientation='left'> <Typography.Title level={3}>合作企业</Typography.Title></Divider>
            <Row>
                {imageList.map((item, index) => (
                    <Col span={6} key={index}>
                        <img src={item.src} alt="" className='bussiness-image'/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BussinessPartner;
