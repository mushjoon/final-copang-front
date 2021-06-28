import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ProductListRouteMain from './ProductListRouteMain';
//App.js 수정 다시함 또다시함
const ProductListApp=()=>{
    return(
        <Router>
            <ProductListRouteMain/>
        </Router>
    )
}

export default ProductListApp;