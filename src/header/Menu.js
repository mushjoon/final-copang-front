import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Product/Product.css';

const Menu =()=>{
    return(
        <div>
            <ul className="menu">
                <li>
                    <NavLink exact to="/list">상품목록</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;