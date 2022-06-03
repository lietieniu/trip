import * as React from 'react';
import './index.css';
import { Typography, Carousel, Image, Table, Rate } from 'antd';
import { ColumnsType } from 'antd/es/table';//表格列配置
import { JsxElement } from 'typescript';

interface IProductIntroProps {
    title: string;
    shortDescription: string;
    price: string | number;
    coupons: string;
    points: string;
    discount: string;
    rating: string | number;
    pictures: string[];
}

const ProductIntro: React.FunctionComponent<IProductIntroProps> = (props) => {
    let { title, shortDescription, price, coupons, points, discount, rating, pictures } = props
    // 表格标题设置
    const columns: ColumnsType<RowType> = [
        {
            title: "标题",
            dataIndex: "title",
            key: "title",
            align: "left",
            width: 120
        },
        {
            title: "描述",
            dataIndex: "description",
            key: "description",
            align: "center",

        }
    ];
    interface RowType {
        title: string,
        description: string | number | JsxElement | any,
        key: number
    };
    // 表格行内内容
    const dataSource: RowType[] = [
        {
            key: 0,
            title: "路线名称",
            description: title,

        },
        {
            key: 1,
            title: "价格",
            description: (
                <>
                    ¥{" "}
                    <Typography.Text type="danger" strong>
                        {price}
                    </Typography.Text>
                </>
            ),
        },
        {
            key: 2,
            title: "限时抢购折扣",
            description: discount ? (
                <>
                    ¥ <Typography.Text delete>{price}</Typography.Text>{" "}
                    <Typography.Text type="danger" strong>
                        ¥ {discount}
                    </Typography.Text>
                </>
            ) : (
                "暂无折扣"
            ),
        },
        {
            key: 2,
            title: "领取优惠",
            description: coupons ? discount : "无优惠券可领",
        },
        {
            key: 2,
            title: "线路评价",
            description: (
                <>
                    <Rate allowHalf defaultValue={+rating} />
                    <Typography.Text style={{ marginLeft: 10 }}>
                        {rating} 星
                    </Typography.Text>
                </>
            ),
        },
    ]
    return (
        <div className='intro-container'>
            {/* 1.标题+描述 */}
            <Typography.Title level={4}>{title}</Typography.Title>
            <Typography.Text>{shortDescription}</Typography.Text>
            {/* 2.价格和评分 */}
            <div className='intro-detail-content'>
                <Typography.Text style={{ marginLeft: 20 }}>
                    ￥ <span className='intro-detail-strong-text'>{price}</span>/人起
                </Typography.Text>
                <Typography.Text style={{ marginLeft: 50 }}>
                    <span className='intro-detail-strong-text'>{rating}</span>分
                </Typography.Text>
            </div>
            {/* 3.走马灯 */}
            <Carousel autoplay slidesToShow={3}>
                {pictures.map((p) =>
                    <Image height={150} src={p} />)}
            </Carousel>
            {/* 4.表格 */}
            <Table
                dataSource={dataSource}
                columns={columns}
                size="small"
                bordered={false}
                pagination={false}
            />
        </div>
    );
};

export default ProductIntro;
