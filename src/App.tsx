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
// 4.1Products页面
import Products from './components/product';
import Plain from './pages/plain'
// 5.1搜索页面
import SearchPage from './pages/search';

//404页面
import NotFind from './pages/NotFind'
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' render={() =>
          <Home>
            <Switch>
              <Route exact={true} path='/' component={Products} />
              <Route exact={true} path='/plain' component={Plain} />
            </Switch>
          </Home>
        } />
        <Route exact={true} path='/sign' component={Sign} />
        <Route exact path='/resiger' component={Resiger} />
        <Route exact path="/detail/:orderDetailId" component={Detail} />
        {/* path="/search/:keywords?" 问号：代表参数可有可无 */}
        <Route exact path="/search/:keywords?" component={SearchPage} />
        <Route exact component={NotFind} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
