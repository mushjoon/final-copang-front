import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    const [input, setInput] = useState();
    const [loginid, setLoginid] = useState();

    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const login = (id) => {
        sessionStorage.setItem("loginid",id);
        setLoginid(id);
        console.log(id+"로 로그인");
    }
    const logout = () => {
        sessionStorage.clear();
        setLoginid('');
        console.log("로그아웃됨");
    }
    const getLoginState = () => {
        return sessionStorage.getItem("loginid");
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/test">테스트 페이지</Link>
                </li>
                <li>
                    <Link to="/test22/13">Test22 페이지</Link>
                </li>
                <li>
                    <Link to="/list">상품 리스트</Link>
                </li>
                <li>
                    <Link to="/copy">쿠팡 카피</Link>
                </li>
                <li>
                    <Link to="/cart">장바구니</Link>
                </li>
                <li>
                    <input onChange={inputChange}></input>
                    <button onClick={() => login(input)}>로그인</button>
                </li>
                <li>
                    <button onClick={logout}>로그아웃</button>
                </li>
                <li>
                    로그인 상태 : {getLoginState() ? getLoginState() : "로그아웃됨"}
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu;