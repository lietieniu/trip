import * as React from 'react';
import { Comment, List, Tooltip } from 'antd'

interface IProductCommentProps {
    data: {
        author: string,
        avatar: string,
        content: string,
        createDate: string
    }[]
}

const ProductComment: React.FunctionComponent<IProductCommentProps> = (props) => {
    let { data } = props;
    return (
        <div>
            <List
                //1.列表数据源
                dataSource={data}
                itemLayout="horizontal"
                //2.渲染每一项数据
                renderItem={(item) => {
                    return <li>
                        <Comment
                            author={item.author} //作者
                            avatar={item.avatar} //头像
                            content={item.content}//内容
                            datetime={item.createDate}//评论时间
                        />
                    </li>
                }}
            >
            </List>
        </div>
    );
};

export default ProductComment;
