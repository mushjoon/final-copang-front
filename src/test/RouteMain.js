import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from '../product/ProductList';
import Menu from '../header/Menu';
import ProductDetail from '../product/ProductDetail';
import test from '../product/test';
import ProductDescBottom from '../product/ProductDescBottom';
import ProductReviewBottom from '../product/ProductReviewBottom';
import ProductQuestionBottom from '../product/ProductQuestionBottom';

const RouteMain = () =>{
    return (
        <div>
            <Menu />
            <Route exact path="/" component={ProductList}/>
            <Route path="/list" component={ProductList}/>
            <Route path="/product/selectOne/:sid" component={ProductDetail}/>
            <Route path="/product/selectOne/:sid/ProductDescBottom" component={ProductDescBottom}/>
            <Route path="/product/selectOne/:sid/ProductReviewBottom" component={ProductReviewBottom}/>
            <Route path="/product/selectOne/:sid/ProductQuestionBottom" component={ProductQuestionBottom}/>
            <Route path="/purchase/product/" component={test}/>
        </div>
    )
}

export default RouteMain;