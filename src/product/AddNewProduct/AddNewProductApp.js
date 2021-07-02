import React, { useState } from "react";
import axios from "axios";
import Option from "./Option";
import DisplayProductName from "./DisplayProductName";
import CategoryForm from "./CategoryForm";
import ImgUpload from "./ImgUpload";
import WriteProductDetail from "./WriteProductDetail";
import NewProductConfirmButton from "./NewProductConfirmButton";

const AddNewProductApp = () => {
  //=============== Image and setImg function ==============//
  const [img, setImg] = useState(null);
  const imageChange = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  //=============== Image URL and set function ==============//
  const [imgUrl, setimgUrl] = useState();
  const imgUpload = async () => {
    const formData = new FormData();
    formData.append("image", img);
    const res = await axios.post("https://alconn.co/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    setimgUrl(res.data.data.publicPath);
  };

  //=============== Changing the product name ==============//
  const [product, setProduct] = useState({
    itemName: "",
    itemComment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setProduct({ ...product, [name]: value });
  };

  //=============== Changing product's other properties ==============//
  const [product2, setProduct2] = useState({
    price: 0,
    stockQuantity: 0,
    optionName: "",
    optionValue: "",
  });
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.dir(productData);
    setProduct2({ ...product2, [name]: value });
  };

  //=============== THE MAIN DATA TO SEND TO THE SERVER ==============//
  const productData = {
    itemName: product.itemName,
    itemComment: product.itemComment,
    itemDetailFormList: [
      {
        price: product2.price,
        stockQuantity: product2.stockQuantity,
        optionName: product2.optionName,
        optionValue: product2.optionValue,
        mainImg: imgUrl,
      },
    ],
  };
  const addProduct = () => {
    const axiosAddProduct = async () => {
      await axios.post("https://alconn.co/api/item/add", productData);
    };
    axiosAddProduct();
    alert("상품이 등록되었습니다.");
  };

  return (
    <div>
      <DisplayProductName product={product} handleChange={handleChange} />
      <CategoryForm />
      <Option product2={product2} handleChange2={handleChange2} />
      <ImgUpload imgUrl={imgUrl} imageChange={imageChange} />
      <WriteProductDetail handleChange={handleChange} />
      <NewProductConfirmButton />
    </div>
  );
};

export default AddNewProductApp;
