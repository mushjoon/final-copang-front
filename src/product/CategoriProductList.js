import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoriProductList = () => {
  const [categoriItemtList, setcategoriItemtList] = useState([]);
  useEffect(() => {
    const res = async () => {
      const result = await axios.get(
        "http://192.168.0.86:8080/api/item/list/categoryid=" + 18
      );
      setcategoriItemtList(result.data.data);
    };
    res();
  }, []);
  console.log(categoriItemtList);

  return <div></div>;
};

export default CategoriProductList;
