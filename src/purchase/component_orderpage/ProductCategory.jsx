import React from 'react'

const ProductCategory = () => {
    return (
        <div className = "row category">
            <div className = "col-6">
                <h5>Product Details</h5>
            </div>
            <div className = "col">
                <h5 className = "text-right">Price</h5>
            </div>
            <div className = "col">
                <h5 className = "text-right">Quantity</h5>
            </div>
            <div className = "col">
                <h5 className = "text-right">Subtotal</h5>
            </div>
        </div>
    )
}

export default ProductCategory;
