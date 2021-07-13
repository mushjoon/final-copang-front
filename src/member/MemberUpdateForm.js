import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";

const MemberUpdateForm = (props) => {
    let userName = props.location.state.userId.username;
    let description = props.location.state.userId.description;
    let phone = props.location.state.userId.phone;
    let profileImage = props.location.state.userId.profileImage;
    let realName = props.location.state.userId.realName;
    let role = props.location.state.userId.role;
    let signInDate = props.location.state.userId.signInDate;


    const [password, setPassword] = useState();

    const [info, setInfo] = useState({realName,phone,description});

    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        // console.log(info);
    };

    const updateHandler = async () => {
        const putData = await axios.put("https://alconn.co/api/user",info);
        
    }
    return (
        <div>
            <Typography variant="h2" gutterBottom>
                {userName} 님 정보 수정하기
            </Typography>
            <h4>유저이름</h4>
            <input type="text" name = "realName" value={info.realName} onChange={handleInfoChange}/>

            <h4>전화번호</h4>
            <input type="tel" name = "phone" value={info.phone} onChange={handleInfoChange}/>

            <h4>설명 </h4>
            <input type="text" name = "description" value={info.description} onChange={handleInfoChange}/>

            <div>
                <h2> 비밀번호 변경 </h2>
                <input type="password" name="currentpassword" onChange={handleInfoChange}/>
                <input type="password" name="newpassword1" onChange={handleInfoChange}/>
                <input type="password" name="newpassword1" onChange={handleInfoChange}/>
                


            </div>
            <button onClick={()=> console.log(info)}>제발</button>
            <button > 수정하기 </button>
        </div>
    )
}

export default MemberUpdateForm;