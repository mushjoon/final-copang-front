import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSection from "./TopSection";
import MemberInfo from "./MemberInfo";
import ProductCategory from "./ProductCategory";
import BottomSection from "./BottomSection";
import Payment from "./Payment";

function ProductInfo({ location }) {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  //const server = "http://192.168.0.13:9001/product/selectOne/9";
  const server = "http://192.168.0.13:9001/cart/selectuser/3";
  //const productSID = [8,9,10,11,12,13];

  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  useEffect(() => {
    //location.state 가 null 이면 cart 라는 서버 DB의 장바구니 테이블에서 데이터를 가져온다.
    //곧 해당 주문은 장바구니 페이지에서 주문하기 버튼을 통해 들어온 것
    //arrayOfPrice 는 단순히 단가 * 수량 = 총 단가 를 계산하기 위한 변수다
    if (location.state === null) {
      const getDataFromCart = async () => {
        const { data } = await axios.get(server);
        setProduct(data);

        const arrayOfPrice = data.map((entry) => {
          return entry.price * entry.entity;
        });
        //console.log(arrayOfPrice);
        setTotalPrice(arrayOfPrice.reduce(reducer, 0));
      };
      getDataFromCart();

      //반대로 location.state에 값이 있으면 해당 주문은 상품 상세 페이지에서 바로구매 기능을 통해 들어온것이며
      //location.state에 해당 상품의 특성 값들을 읽어서 출력해야함
    } else {
      const getDataDirect = async () => {
        const anotherData = [location.state];
        console.log(anotherData);
        setProduct(anotherData);

        const arrayOfPrice = anotherData.map((entry) => {
          return entry.price * entry.entity;
        });
        //console.log(arrayOfPrice);
        setTotalPrice(arrayOfPrice.reduce(reducer, 0));
      };
      getDataDirect();
    }
  }, []);

  return (
    <div>
      <TopSection totalPrice={totalPrice} />
      <MemberInfo />
      <ProductCategory />

      {/* 매핑을 사용해서 상품 리스트를 읽어와서 반복출력을 한다 
        물론 바로구매로 들어왔으면 상품 한개만 출력이 된다*/}
      {product.map((entry) => {
        return (
          <div key={entry.id} className="row product">
            <div className="col-1 productImage">
              <img src={entry.image} alt="product img"></img>
            </div>
            <div className="col-5">
              <h5 className="productName">
                {entry.productName ? entry.productName : entry.name}
              </h5>
              <h6>Item No: {entry.productSID}</h6>
              <h6>판매자: {entry.userSID}</h6>
              <h6>Details: {entry.description}</h6>
            </div>
            <div className="col-2 my-auto">
              <h6 className="text-right">{entry.price}원</h6>
            </div>
            <div className="col-2 my-auto">
              <h6 className="text-right">{entry.entity}개</h6>
            </div>
            <div className="col-2 my-auto">
              <h6 className="text-right">{entry.price * entry.entity}원</h6>
            </div>
          </div>
        );
      })}
      <Payment />
      <BottomSection totalPrice={totalPrice} />
    </div>
  );
}

export default ProductInfo;
