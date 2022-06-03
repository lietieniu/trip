import * as React from 'react';

import {Layout,Typography} from 'antd';

interface IAppProps {
  
}

const Footer: React.FunctionComponent<IAppProps> = (props) => {
  
    return (
        <div>
            <Layout.Footer>
                 <Typography.Title level={4} style={{textAlign:'center'}}>版权所有,@React 旅游网页</Typography.Title>
            </Layout.Footer>
        </div>
    );
};

export default Footer;
