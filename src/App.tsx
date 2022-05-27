import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// 1.Home页面
import Home from './pages/home';
//2.登录界面
import Sign from './pages/sign';
//2.1注册界面
import Resiger from './pages/resiger';
// 3.1订单详情
import Detail from './pages/detail';

//404页面
import NotFind from './pages/NotFind'
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/sign' component={Sign} />
        <Route exact path='/resiger' component={Resiger} />
        <Route exact path="/detail/:orderDetailId" component={Detail}/>
        <Route exact component={NotFind} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
