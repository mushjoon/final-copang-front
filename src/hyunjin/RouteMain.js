import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from '../Product/ProductList';
import Menu from '../header/Menu';
import ProductDetail from '../Product/ProductDetail';
import test from '../Product/test';
import ProductDescBottom from '../Product/ProductDescBottom';
import ProductReviewBottom from '../Product/ProductReviewBottom';
import ProductQuestionBottom from '../Product/ProductQuestionBottom';

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
            <Route path="/purchase/product/:sid" component={test}/>


        </div>
    )
}

export default RouteMain;