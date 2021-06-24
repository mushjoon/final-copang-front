import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSection from "./TopSection";
import MemberInfo from "./MemberInfo";
import ProductCategory from "./ProductCategory";
import BottomSection from "./BottomSection";


function ProductInfo(){

    const [product, setProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    //const server = "http://192.168.0.13:9001/product/selectOne/9";
    const server = "http://192.168.0.13:9001/cart/selectuser/3"
    //const productSID = [8,9,10,11,12,13];
    const arrayOfPrice = product.map(entry => {
        return (entry.price * entry.entity)
    })
    const reducer = ((accumulator, currentValue) => {
        return accumulator + currentValue
    });
    

    useEffect(() => {
        

        const getProductData = async () => {
            const {data} = await axios.get(server)
            setProduct(data);
            setTotalPrice(arrayOfPrice.reduce(reducer,0));
            //console.log(data);
        }
        getProductData();
        // console.log(product);
        
    },[]);
    console.log(arrayOfPrice);
    
    return (
        <div>
            <TopSection totalPrice = {totalPrice} />
            <MemberInfo />
            <ProductCategory />
            {product.map(entry => {
            return (
                <div key = {entry.id} className = "row product">
                    <div className = "col-1 productImage">
                        <img src = {entry.image} alt = "product img"></img>
                    </div>
                    <div className = "col-5">
                        <h5 className = "productName">{entry.productName}</h5>
                        <h6>Item No: {entry.productSID}</h6>
                        <h6>판매자: {entry.userSID}</h6>
                        <h6>Details: {entry.description}</h6>
                    </div>
                    <div className = "col-2 my-auto">
                        <h6 className = "text-right">{entry.price}원</h6>
                    </div>
                    <div className = "col-2 my-auto">
                        <h6 className = "text-right">{entry.entity}개</h6>
                    </div>
                    <div className = "col-2 my-auto">
                        <h6 className = "text-right">{entry.price * entry.entity}원</h6>
                    </div>
                    <div className = "col-2 my-auto">
                        <h6 className = "text-right">{totalPrice}원</h6>
                    </div>
                </div>
            )
            })}
            {/* <BottomSection totalPrice = {totalPrice} /> */}
        </div>
    )
}

export default ProductInfo;
