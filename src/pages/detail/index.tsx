import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    orderDetailId: string
}

const Detail: React.FunctionComponent<RouteComponentProps<MatchParams>> = (props) => {
    console.log(props.location);
    console.log(props.history)
    console.log(props.match)
    return (
        <h1>获得的订单详情参数:详情ID:{props.match.params.orderDetailId}</h1>
    );
};

export default Detail;
