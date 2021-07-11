import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import MainToday from './MainToday';
import MainDoYouNeed from './MainDoYouNeed';
import MainHotBook from './MainHotBook';
import MainBanner from './MainBanner';
import MainTodayDiscovery from './MainTodayDiscovery';
import { Box, Typography } from '@material-ui/core';


const MainPage = ({ history }) => {

  let COMPUTER_CATEGORY_ID = 1083;

  const [Computer, setComputer] = useState([]);
  useEffect(() => {
    const res = async () => {
      const result = await axios.get(
        "https://alconn.co/api/item/list/categoryid=" + COMPUTER_CATEGORY_ID
      );
      setComputer(result.data.data);
      console.log(result.data);
    };
    res();
  }, []);


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MainBanner />
      <MainTodayDiscovery history={history} />
      <Box>
        <Typography variant="h4" display='block' gutterBottom>오늘의 쇼핑제안</Typography>
        <MainToday history={history} />
      </Box>
      <Box>
        <Typography variant="h4" display='block' gutterBottom>지금 이 상품이 필요하신가요?</Typography>
        <MainDoYouNeed history={history} />
      </Box>
      <Box>
        <Typography variant="h4" >요즘 뜨는 도서</Typography>
        <MainHotBook history={history} />
      </Box>
    </div>
  );
};
export default MainPage;
