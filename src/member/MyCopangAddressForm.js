import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import axios from 'axios';

export default function MyCopangAddressForm({ history }) {
  let xs = 10;
  const [addrValues, setAddrValues] = useState({ name: "", postCode: "", phoneNumber: "", requestMessage: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setAddrValues({ ...addrValues, [name]: value });
  }

  // const SubmitAddr = (addrValues) => {
  //   const uri = "11111111111";
  //   useEffect(() => {
  //     const postAddr = async () => {
  //       const data = await axios.post(uri, addrValues)
  //     }
  //     postAddr();
  //   }, []);
  // }
  const onSubmit = () => {
    // console.log({ ...addrValues });
    // console.log(addrValues);
    history.push("/my-addr",addrValues)
    // history.push({
    //   pathname: "/my-addr",
    //   state: {...addrValues}
    // })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        배송지 주소
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={xs} sm={4}>
          <TextField
            required
            id="firstName"
            name="name"
            value={addrValues.name}
            label="받는 사람"
            fullWidth
            autoComplete="given-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={xs} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            value={addrValues.phoneNumber}
            label="전화번호"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={xs}>
          <TextField
            required
            id="postCode"
            name="postCode"
            value={addrValues.postCode}
            label="배송 주소를 입력해주세요"
            fullWidth
            autoComplete="shipping address-line"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={xs}>
          <TextField
            id="requestMessage"
            name="requestMessage"
            value={addrValues.requestMessage}
            label="요청 사항을 말씀해주세요"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={xs}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="기본 배송지로 선택"
          />
        </Grid>
        <Grid container item xs={xs} justify="center" >
          <Button variant="contained" color="primary" onClick={onSubmit} >저장하기</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
