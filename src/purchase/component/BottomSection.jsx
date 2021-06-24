import React, {useEffect} from "react";
//import {totalPrice} from "./ProductInfo";

function BottomSection(props){

    useEffect(() => {
        console.log(props.totalPrice)
        
    },[props.totalPrice])

    return (
        <div>
            <div className = "row bottom">
                <div className = "col-9">
                    <h5 style = {{fontWeight: "bold"}} className = "text-right">Your Total Price: </h5>
                </div>
                <div className = "col-3">
                    <h3 className = "text-right">{props.totalPrice}원</h3>
                </div>
            </div>
            <div className = "row button justify-content-end"> 
                <div className = "col-12 button">
                    <button type = "button" 
                        className = "btn btn-primary btn-lg btnOrder">
                        Place Order</button>
                    <button type = "button" 
                        className = "btn btn-danger btn-lg btnCancel">
                        Cancel</button>
                 </div>
            </div>
        </div>
    )
}

export default BottomSection;