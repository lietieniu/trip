import * as React from 'react';
import { Typography } from 'antd'

interface IPlainProps {
}

const Plain: React.FunctionComponent<IPlainProps> = (props) => {
    return (
        <div>
            <Typography.Title level={4} type="success">飞机票</Typography.Title>
        </div>
    );
};

export default Plain;
