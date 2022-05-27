import * as React from 'react';
import './index.css'
import { Carousel as AntCarousel, Image } from 'antd';
import carouselImage1 from '../../assets/images/carousel_1.jpg';
import carouselImage2 from '../../assets/images/carousel_2.jpg'
import carouselImage3 from '../../assets/images/carousel_3.jpg'


interface IAppProps {
}

const Carousel: React.FunctionComponent<IAppProps> = (props) => {
    return <AntCarousel autoplay className='carousel'>
        <Image src={carouselImage1}></Image>
        <Image src={carouselImage2}></Image>
        <Image src={carouselImage3}></Image>
    </AntCarousel>;
};

export default Carousel;
