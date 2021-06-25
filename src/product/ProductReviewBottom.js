import React from "react";
const ProductReviewBottom = () => {
    return (
        <div className="product-review-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="product-review">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="product-review-header">
                    <div style={{ fontWeight: 'bold', fontSize: '1.5em', marginTop: '3%' }}>상품평<span style={{float:'right',fontSize:'10pt',color:'#346AFF'}}>상품평 운영원칙</span></div><br/>
                    <div style={{width:'300px',height:'44'}}>
                        <span className="star glyphicon glyphicon-star"></span>
                        <span className="star glyphicon glyphicon-star" ></span>
                        <span className="star glyphicon glyphicon-star"></span>
                        <span className="star glyphicon glyphicon-star"></span>
                        <span className="star glyphicon glyphicon-star"></span>&nbsp;&nbsp;&nbsp;
                        <span className="reviewlength">13</span>
                        </div>
                        <div>
                            <img alt="사진1" src="/에어맥스97.PNG"/>
                            <img alt="사진2" src="/에어맥스97.PNG"/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReviewBottom;