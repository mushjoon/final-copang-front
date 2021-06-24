import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';


const ProductDetail = ({ match, history }) => {
    console.dir(match);
    console.log(match.params.sid);
    let productSID = match.params.sid;

    const [ProductOne, setProductOne] = useState([]);

    useEffect(() => {
        const res = async () => {
            const result = await axios.get("http://192.168.0.13:9001/product/selectOne/" + productSID);
            setProductOne(result.data)
            console.log(result);
        }
        res();
    }, [productSID])

    console.log(history)
    const [ProductList, setProductList] = useState([]);

    useEffect(() => {
        const res = async () => {
            const result = await axios.get("http://192.168.0.13:9001/product/selectAll");
            setProductList(result.data)
        }
        res();
    }, [])

    const sendData ={
        userSID : 3,
        productSID
    }
    const addOneCart =()=>{
            const axiosAddOneCart = async () => {
                const result = await axios.post("http://192.168.0.13:9001/cart/addone",sendData);
                console.log("addOneCart결과=>"+result);
                console.log(result);
            }
            axiosAddOneCart();
    }

    return (
        <div className="total-wrap">
            <div className="totaldesc">
                <div className="header">
                <div className="dsecImage" style={{ width: '410px', height: '410px' }}><img className="productImage" alt="../에어맥스97.PNG" src="/에어맥스97.PNG" /></div>
                <div className="productdesc" >
                    <div className="productName" style={{ width: '479px', borderBottom: '1px sloid gray' }}><h2>{ProductOne.name}</h2>{ProductOne.description}</div>
                    <div className="productStar"><span>별점</span></div>
                    <div className="productPrice"><div style={{ marginTop: '10px' }}><strong style={{ fontSize: '16pt', color: '#AE0000' }}>{ProductOne.price}</strong>원</div></div>
                    <div className="productSizeColor">
                        <div className="productSize">신발 사이즈(mm) : ?</div>
                        <div className="productColor">색상 : ?</div>
                    </div>
                    <div className="productSeller">
                        <div className="seller">판매자 : 정보통신OK</div>
                        <div className="deliver">택배사 : 우체국MES</div>
                    </div>
                    <div className="cartPerchase">
                        <button className="cart" onClick={addOneCart}>장바구니 담기</button>
                        <button className="perchase" onClick={
                                ()=>{
                                history.push("/purchase/product/"+productSID);
                    }
                }>바로구매</button>
                    </div>
                </div>
            </div>
                <div className="otherProduct">
                    <h2>다른상품</h2>
                    <ul className="otherProduct-ul">
                        {
                            ProductList && ProductList.map((row, idx) => {
                                return (
                                    <li row={row} key={idx}
                                        onClick={
                                            () => {
                                                history.push("/product/selectOne/" + row.sid);
                                            }
                                        }>
                                        <dl style={{ height: '100px' }}>
                                            <dt>
                                                <img alt={row.image} src="/에어맥스97.PNG" style={{ width: '230px', height: '230px' }} />
                                            </dt>
                                            <dd className="desc">
                                                <div>
                                                    <div className="namedesc">
                                                        <div className="name">{row.name}</div>
                                                        <div className="desc"><LinesEllipsis
                                                            text={row.description}
                                                            maxLine={4} /></div>
                                                    </div>
                                                    <div className="price-area">
                                                        <span className="price-wrap">
                                                            <span className="instant-discount-rate">10</span>%
                                                            <del className="base-price">{row.price}</del>
                                                        </span><br />
                                                        <em className="sale">
                                                            <strong className="price-value">{row.price}</strong>원
                                                        </em>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="productMenuBar">
                    <ul className="productMenuBarUl">
                        <li className="a" onClick={
                    ()=>{
                        history.push("/product/selectOne/"+productSID+"/ProductDescBottom");
                    }
                }>상품상세</li>
                        <li className="b" onClick={
                    ()=>{
                        history.push("/product/selectOne/"+productSID+"/ProductReviewBottom");
                    }
                }>상품평</li>
                        <li className="c" onClick={
                    ()=>{
                        history.push("/product/selectOne/"+productSID+"/ProductQuestionBottom");
                    }
                }>상품문의</li>
                    </ul>
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;