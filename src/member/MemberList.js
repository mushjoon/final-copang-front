import React, {useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { Table, TableBody, TableContainer, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

    const StyledTableCell = withStyles((theme) => ({
        head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize:20
        },
        body: {
        fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        },
    }))(TableRow);
    
    const List = () =>{
        const [list1, setList1] = useState([]);
            
        useEffect( ()=>{
            const res = async() =>{
                const result = await axios.get("http://deli.alconn.co/api/stores/list")
                // deli.alconn.co/api/user/list - 테스트서버 url
                // 192.168.0.13:9001/person/list - 테스트2서버 url
                setList1(result.data.data)
                console.log(result.data.data)
            }
            res();
        },[])
        return(
            <div style={{width: '70%', margin: '100px auto'}}>
        <TableContainer checkboxSelection>
            <b>회원정보</b>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">NUM</StyledTableCell>
                        <StyledTableCell align="center">NAME</StyledTableCell>
                        <StyledTableCell align="center">DESC</StyledTableCell>
                        <StyledTableCell align="center">CREATEDTIME</StyledTableCell>
                        <StyledTableCell align="center">USER</StyledTableCell>
                    </TableRow>
                </TableHead>    
                <TableBody>
                {  
                    list1.map((row,idx)=>
                <StyledTableRow>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.desc}</StyledTableCell>
                    <StyledTableCell align="center">{row.createdTime}</StyledTableCell>
                    <StyledTableCell align="center">{row.user}</StyledTableCell>
                </StyledTableRow>
                )}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        );
    }

    

export default List