import * as React from 'react';
import './index.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams, useLocation } from 'react-router-dom';
import { searchProduct } from '../../redux/productSearch/slice';
import { Button, Spin, Typography } from 'antd';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';

// import {FilterArea} from '../../components/filter/index';
// import {ProductList} from '../../components/productList'

interface ISearchPageProps {
  match: any
}
interface matchParams {
  keywords: string
}

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
  // 获得参数方法一: 
  let params = useParams()
  let keywords = props.match.params.keywords;
  // 方法二:
  // let { keywords } = useParams<matchParams>();
  let Location = useLocation()
  let dispatch = useDispatch()

  const loading = useSelector((state) => state.productSearch.loading)
  const error = useSelector((state) => state.productSearch.error)
  const pagination = useSelector((state) => state.productSearch.pagination)
  const productList = useSelector((state) => state.productSearch.data)


  // React.useEffect(() => {
  //   // 用location监听keywords关键词的变化,keywords改变,函数重新调用请求数据
  //   dispatch(searchProduct({nextPage:1,pageSize:10,keywords}))
  // }, [Location]);

  // const onChange=(nextPage:any,pageSize:any)=>{
  //   dispatch(searchProduct({nextPage,pageSize,keywords}))
  // }
 
  return (
    <div>
      <Header />
      <div className='page-content'>
          {/*1.分类过滤器*/}
        <div className='product-list-container'>
          {/* <FilterArea/> */}
        </div>
        {/* 2.产品列表 */}
        {/* <div className='product-list-container'>
                  <ProductList 
                   data={productList}
                   paging={pagination}
                   onChange={onChange}

                  />
                </div> */}
        <Typography.Title level={3} type="success">关键词为:{keywords}</Typography.Title>
        <Button>点击</Button>
      </div>
      <Footer

      />
    </div>
  );
};

export default SearchPage;
