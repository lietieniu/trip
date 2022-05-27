import * as React from 'react';
import { Image, Typography } from 'antd';
import './index.css'

interface IProductImageProps {
    id: number | string,
    title: string,
    size: "large" | "small",
    price: string | number,
    imageSrc: string

}

const ProductImage: React.FunctionComponent<IProductImageProps> = (props) => {
    let { id, title, size, price, imageSrc } = props;
    return <div>
        {
            size == "large" ? (
                <Image src={imageSrc} height={285} width={490} className="product-image"/>
            ) : (
                <Image src={imageSrc} height={120} width={240} className="product-image"/>
            )

        }
        <div>
            <Typography.Text type='secondary' style={{fontSize:13}}>
                {title.slice(0, 25)} 
            </Typography.Text>
            <Typography.Text type='danger'strong style={{marginLeft:10}}>
                $ {price} 起
            </Typography.Text>
        </div>
    </div>
};

export default ProductImage;
