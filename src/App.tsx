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
// 6.购物车私有路由组件
import ShoppingCart from './pages/shoppingCart';
// 7.在线支付页面
import PlaceOrder from './pages/placeOrder';

//404页面
import NotFind from './pages/NotFind'

// 2.工具，设置私有路由信息
import { Redirect } from 'react-router-dom';
import { useSelector } from './redux/hooks';
import { connect } from 'react-redux';

// 2.1 App组件渲染时，购物车启动
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice'

interface private1 {
  component: any,
  isLogin: any,
  rest: string
}

// 方法一:
const PrivateRoute = ({ component, isLogin, ...rest }: any) => {
  // 内部封装组件,根据isAuthenticated,判断用户是否登录,登录则显示对应组件页面,否则重定向到的登录页面
  console.log(isLogin)
  const routeComponent = (props: any) => {
    return isLogin ? (React.createElement(component, props) //创建一个元素组件
    ) : (
      <Redirect to='/sign' /> //没有Token话,重定向到登录页面
    )
  };
  return <Route render={routeComponent} {...rest} /> //...rest包括path
};

//方法二:练习私有路由
const PrivateRoute1 = ({ component, isLogin, ...rest }: any) => {
  const renderRoute = (props: any) => {
    return isLogin ? (React.createElement(component)
    ) : (
      <Redirect to='sign' />
    )
  };
  return <Route render={renderRoute} {...rest} />
}

// 方法三:
const PrivateRoute2 = ({ component, isLogin, ...reset }: any) => {

  return isLogin ? (<Route redner={React.createElement(component)} {...reset} />
  ) : (
    <Redirect to='/sign' />
  )
}

interface IAppProps {
  user: any
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.user
  }
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  //1.私有路由设置
  let { user } = props;
  let jwt = user.token //jwt是user中的一个状态

  //2.购物车初始化渲染;
  const dispatch = useDispatch();
  // const jwt=useSelector(s=>s.user.token);
  useEffect(() => {
    if (jwt) {
      //  (用户登录之后才能显示购物车信息)
      //  dispatch(getShoppingCart(jwt))
    }
  }, [jwt])

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
        {/* 用户登录---购物车私有路由 */}
        <PrivateRoute
          isLogin={jwt == null} //jwt存在不为null时,说明用户登录请求成功
          path="/shoppingCart"
          component={ShoppingCart} />
        {/* 在线支付私有路由 */}
        <PrivateRoute
          isLogin={jwt== null}
          component={PlaceOrder}
          path='/placeOrder'
        />
 
        <Route exact component={NotFind} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps)(App);
