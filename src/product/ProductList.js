import React,{useEffect, useState} from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import ProductListRowItem from './ProductListRowItem';







const ProductList = (history) =>{
    console.log(history);
    const [ProductList, setProductList] = useState([]);

    useEffect( ()=>{
        const res = async() =>{
            const result= await axios.get("http://192.168.0.13:9001/product/selectAll");
            setProductList(result.data)
        }
        res();
    },[])

    // const product = {
        
    //     "desc" : [
    //         {   
    //             num :"1",
    //             productimg : "에어맥스97.PNG",
    //             productdesc: "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*(1-0.3)
    //         },
    //         {
    //             "num":"2",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*(1-0.3)
    //         },
    //         {
    //             "num":"3",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //         {
    //             "num":"4",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //         {
    //             "num":"5",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //         {
    //             "num":"6",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //         {
    //             "num":"7",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //         {
    //             "num":"8",
    //             "productimg" : "에어맥스97.PNG",
    //             "productdesc": "[당일배송 17시까지] 나이키 양말 에브리데이 쿠션크루 [SX7664-100][세트/낱장],M 낱장 (250~270) 1켤레",
    //             saleper: 30,
    //             price1 : 199000,
    //             price2 : 199000*0.7
    //         },
    //     ]
    // }
    return (
        <div className="productlist">
            <ul className="searchproduct">
                {
                    ProductList&&ProductList.map((row,idx)=>
                    <ProductListRowItem row={row} key={idx} no={idx+1}
                        history={history}/>
                )}
            </ul>
        </div> 
        )
}

export default ProductList;