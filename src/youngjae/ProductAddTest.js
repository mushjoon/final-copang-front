import React, { useState } from 'react';
import axios from 'axios';

const ProductAddTest = () => {

    const [product2, setProduct2] = useState({
            "price": "",
            "stockQuantity": "",
            "optionName": "",
            "optionValue": "",
            "mainImg": ""
    })

    const handleChange2 = (e) =>{
        const {name,value} =e.target;
        
        setProduct2({...product2, [name]:value})
    }

    const [product, setProduct] = useState({
        "itemName": "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setProduct({...product, [name]:value})
    }

    const productData = {
        "itemName": product.itemName,
        "itemDetailFormList": [{
            "price": product2.price,
            "stockQuantity": product2.stockQuantity,
            "optionName": product2.optionName,
            "optionValue": product2.optionValue,
            "mainImg": product2.mainImg
        }]
    }


    const addProduct = () => {
        const axiosAddProduct = async () => {
            await axios.post("https://alconn.co/api/item/add", productData)
        }
        axiosAddProduct();
        alert("상품이 등록되었습니다.");
    }

    return (
        <div>
            <div>
                <div style={{ float: 'left' }}>itemName</div>
                <input type="text" name="itemName" value={product.itemName} onChange={handleChange} placeholder="상품명을 입력하시오." />
            </div>
            <div>
                <div style={{ float: 'left' }}>price</div>
                <input type="text" name="price" value={product2.price} onChange={handleChange2}  placeholder="상품 가격 입력하시오." />
            </div>
            <div>
                <div style={{ float: 'left' }}>stockQuantity</div>
                <input type="text" name="stockQuantity" value={product2.stockQuantity} onChange={handleChange2} placeholder="잔고수량 입력하시오." />
            </div>
            <div>
                <div style={{ float: 'left' }}>optionName</div>
                <input type="text" name="optionName" value={product2.optionName} onChange={handleChange2} placeholder="옵션명 입력하시오." />
            </div>
            <div>
                <div style={{ float: 'left' }}>optionValue</div>
                <input type="text" name="optionValue" value={product2.optionValue} onChange={handleChange2} placeholder="옵션값 입력하시오." />
            </div>
            <div>
                <div style={{ float: 'left' }}>mainImg</div>
                <input type="text" name="mainImg" value={product2.mainImg} onChange={handleChange2} placeholder="이미지명을 입력하시오(테스트)" />
            </div>
            <button type="submit" onClick={addProduct}>상품등록하기</button>
        </div>
    )
}

export default ProductAddTest;