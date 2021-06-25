import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductQuestionBottom=()=>{
    
    const [Question, setQuestion] = useState([]);
    useEffect(() => {
        const res = async () => {
            const result = await axios.get("http://192.168.0.13:9001/question/list");
            setQuestion(result.data)
        }
        res();
    }, [])


    return(
            <div className="product-question-desc">
                <div >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="product-question-desc-header">
                        <div style={{fontWeight:'bold', fontSize:'1.5em', marginTop:'3%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        상품문의</div><br/><br/>
                        <ul className="product-question-desc">
                            <li>
                            구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
                            </li>
                            <li>
                            상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.
                            </li>
                            <li>
                            가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기를 이용해주세요.
                            </li>
                            <li>
                            "해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.
                            </li>
                            <li>
                            공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.
                            </li>
                        </ul>
                        <div className="product-question-body-wrap">
                            <div className="product-question-body">
                                {
                                    Question&&Question.map((row,idx) => {
                                        return(
                                            <div className="product-question-body2" row={row} key={idx}>
                                                <strong><span style={{backgroundColor:'#777777',color:'white'}}>질문</span>&nbsp;<span className="glyphicon glyphicon-user"></span>&nbsp;{row.writeID}</strong><span className="product-question-writeday">{row.writeDate}</span><br/><br/>
                                                <div>{row.writeContent}</div><br/>
                                                {
                                                    row.replyID && <div className="question-reply-wrap"><br></br><strong><span style={{backgroundColor:'#346AFF',color:'white'}}>답글</span>&nbsp;<span className="glyphicon glyphicon-eject"></span>&nbsp;{row.replyID}</strong><span className="product-question-writeday">{row.replyDate}</span><br/><br/>
                                                    <div>{row.replyContent}</div><br/>
                                                    </div>
                                                }
                                            </div>      
                                        );
                                    })
                                }
                            </div>    
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default ProductQuestionBottom;