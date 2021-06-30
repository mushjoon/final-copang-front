import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

// 배송지 목록 패치에오기 
// const FetchAddress = () => {
//     const [addrList, setAddrList] = useState([]);

//     const addrListUrl = ;
//     useEffect(() => {

//         const getAddrList = async () => {
//             const { data } = await axios.get(addrListUrl);
//             setAddrList(data );
//         }
//         getAddrList();
//     }, []);
// }

const MyCopangAddress = ({ history,match,location },props) => {
    const addrList = [
        {
            id: 1,
            name: "오택원",
            label: "기본배송지",
            addr: "경기도 성남시 분당구 구미동",
            phone: "010-1111-1111",
            location: " 문 앞",
        },
        {
            id: 2,
            name: "유유유유",
            label: "낫띵",
            addr: "ㅁㄴㅇㄹ호",
            phone: "010-1111-1111",
            location: " 문 앞",
        }
    ]

    const MyCopangAddrBoxItem = styled.div`
        border: 3px solid gray;
        margin-bottom : 1px;
    `;

    return (
        <div className="MyCopangAddr-box">
            {addrList.map(item => (
                <MyCopangAddrBoxItem key={item.id}>
                    <div className="MyCopangAddr-title">{item.name}</div>
                    <div className="MyCopangAddr-label">{item.label}</div>
                    <div className="MyCopangAddr-addr">{item.addr}</div>
                    <div className="MyCopangAddr-phone">{item.phone}</div>
                    <div className="MyCopangAddr-location">{item.location}</div>
                </MyCopangAddrBoxItem>
            ))
            }
            <div className="MyCopangAddr-add-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={() => history.push('/address-add-page')}>
                    추가하기
                </Button>
                <Button variant="contained" color="primary" onClick={() => console.log(location.state)}>확인하기</Button>
            </div>
        </div>
    )
}

export default MyCopangAddress;