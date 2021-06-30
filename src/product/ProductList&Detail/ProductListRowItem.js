import React from 'react';
import { withRouter } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import './Product.css';

const ProductListRowItem = (props) =>{
    return(
                <li                   
                onClick={
                    ()=>{
                        props.history.push("/member/4/product/selectOne/"+props.row.sid+"/ProductDescBottom");
                    }
                }>
                    <dl>
                        <dt>
                        <img alt={props.row.image} src="/에어맥스97.PNG" style={{width:'230px', height:'230px'}} />
                        </dt>
                        <dd className="desc">
                            <div>
                                <div className="namedesc">
                                    <div className="name">{props.row.name}</div>
                                    <div className="desc"><LinesEllipsis 
                                        text={props.row.description}
                                        
                                        maxLine={4}/></div>
                                    
                                </div>
                                <div className="price-area">
                                    <span className="price-wrap">
                                        <span className="instant-discount-rate">10</span>%
                                        <del className="base-price">{props.row.price}</del>
                                    </span><br/>
                                    <em className="sale">
                                        <strong className="price-value">{props.row.price}</strong>원
                                    </em>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </li>

    )
}

export default withRouter(ProductListRowItem);
