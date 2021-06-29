import axios from 'axios';

const Test = () => {

    const server = "http://192.168.0.13:9001"
    const productData1 = {
        name : "냄비3",
        price : 18000,
        description : '냄비 3입니다',
        image : '냄비3.png',
        sellerSID : 'seller2'
    }
    const productData2 = {
        sid : 3,
        name : "과자2",
        price : 3300,
        description : '과자2입니다',
        image : '이미지2.png',
        sellerSID : 'sellerID2'
    }
    const sellerData1 = {
        username : "seller1",
        password : "seller1",
    }
    const sellerData2 = {
        sid : 3,
        username : "seller2",
        password : "seller2",
    }
    const customerData1 = {
        username : "cus1",
        password : "cus1",
    }
    const customerData2 = {
        sid : 3,
        username : "cus2",
        password : "cus2",
    }
    const productSID = 13;
    const sellerSID = 3;
    const customerSID = 3;

    const productList = () => {
        const axiosProductList = async () => {
            const result = await axios.get(server+"/product/selectAll");
            console.log("productList 결과:");
            console.log(result);
        }
        axiosProductList();
    }
    const productOne = () => {
        const axiosProductOne = async () => {
            const result = await axios.get(server+"/product/selectOne/"+productSID);
            console.log("productOne 결과:");
            console.log(result);
        }
        axiosProductOne();
    }
    const insertProduct = () => {
        const axiosInsertProduct = async () => {
            const result = await axios.post(server+"/product/insert",productData1);
            console.log("insertProduct 결과:");
            console.log(result);
        }
        axiosInsertProduct();
    }
    const deleteProduct = () => {
        const axiosDeleteProduct = async () => {
            const result = await axios.delete(server+"/product/delete/"+productSID);
            console.log("deleteProduct 결과:");
            console.log(result);
        }
        axiosDeleteProduct();
    }
    const updateProduct = () => {
        const axiosUpdateProduct = async () => {
            const result = await axios.put(server+"/product/update",productData2);
            console.log("updateProduct 결과:");
            console.log(result);
        }
        axiosUpdateProduct();
    }

    const sellerList = () => {
        const axiosSellerList = async () => {
            const result = await axios.get(server+"/seller/selectAll");
            console.log("sellerList 결과:");
            console.log(result);
        }
        axiosSellerList();
    }
    const sellerOne = () => {
        const axiosSellerOne = async () => {
            const result = await axios.get(server+"/seller/selectOne/"+sellerSID);
            console.log("sellerOne 결과:");
            console.log(result);
        }
        axiosSellerOne();
    }
    const insertSeller = () => {
        const axiosInsertSeller = async () => {
            const result = await axios.post(server+"/seller/insert",sellerData1);
            console.log("insertSeller 결과:");
            console.log(result);
        }
        axiosInsertSeller();
    }
    const deleteSeller = () => {
        const axiosDeleteSeller = async () => {
            const result = await axios.delete(server+"/seller/delete/"+sellerSID);
            console.log("deleteSeller 결과:");
            console.log(result);
        }
        axiosDeleteSeller();
    }
    const updateSeller = () => {
        const axiosUpdateSeller = async () => {
            const result = await axios.put(server+"/seller/update",sellerData2);
            console.log("updateSeller 결과:");
            console.log(result);
        }
        axiosUpdateSeller();
    }

    const customerList = () => {
        const axiosCustomerList = async () => {
            const result = await axios.get(server+"/customer/selectAll");
            console.log("customerList 결과:");
            console.log(result);
        }
        axiosCustomerList();
    }
    const customerOne = () => {
        const axiosCustomerOne = async () => {
            const result = await axios.get(server+"/customer/selectOne/"+customerSID);
            console.log("customerOne 결과:");
            console.log(result);
        }
        axiosCustomerOne();
    }
    const insertCustomer = () => {
        const axiosInsertCustomer = async () => {
            const result = await axios.post(server+"/customer/insert",customerData1);
            console.log("insertCustomer 결과:");
            console.log(result);
        }
        axiosInsertCustomer();
    }
    const deleteCustomer = () => {
        const axiosDeleteCustomer = async () => {
            const result = await axios.delete(server+"/customer/delete/"+customerSID);
            console.log("deleteSeller 결과:");
            console.log(result);
        }
        axiosDeleteCustomer();
    }
    const updateCustomer = () => {
        const axiosUpdateCustomer = async () => {
            const result = await axios.put(server+"/customer/update",customerData2);
            console.log("updateCustomer 결과:");
            console.log(result);
        }
        axiosUpdateCustomer();
    }

    const cartData1 = {
        userSID : 3,
        productSID : 12,
        entity : 1,
    }
    const cartData2 = {
        userSID : 3,
        productSID : 13,
        entity : 1,
    }
    const cartData3 = {
        userSID : 4,
        productSID : 12,
        entity : 1,
    }
    const cartData4 = {
        userSID : 4,
        productSID : 13,
        entity : 1,
    }
    const userSID = 3;


    const cartList = () => {
        const axiosCartList = async () => {
            const result = await axios.get(server+"/cart/selectuser/"+userSID);
            console.log("cartList 결과:");
            console.log(result);
        }
        axiosCartList();
    }
    const addCart = () => {
        const axiosAddOneCart = async () => {
            const result = await axios.post(server+"/cart/add",cartData1);
            console.log("addCart 결과:");
            console.log(result);
        }
        axiosAddOneCart();
    }
    const addTwoCart = () => {
        const axiosAddOneCart = async () => {
            const result = await axios.post(server+"/cart/add",cartData2);
            console.log("addTwoCart 결과:");
            console.log(result);
        }
        axiosAddOneCart();
    }
    const removeOneCart = () => {
        const axiosRemoveOneCart = async () => {
            const result = await axios.post(server+"/cart/removeone",cartData1);
            console.log("removeOneCart 결과:");
            console.log(result);
        }
        axiosRemoveOneCart();
    }
    const removeLineCart = () => {
        const axiosRemoveLineCart = async () => {
            const result = await axios.post(server+"/cart/removeline",cartData1);
            console.log("removeLineCart 결과:");
            console.log(result);
        }
        axiosRemoveLineCart();
    }
    const removeUserCart = () => {
        const axiosRemoveUserCart = async () => {
            const result = await axios.delete(server+"/cart/removeuser/"+userSID);
            console.log("removeUserCart 결과:");
            console.log(result);
        }
        axiosRemoveUserCart();
    }


    return (
        <div>
            <b>Cart 테스트</b><br/>
            <button onClick={addCart}>Add One</button>
            <button onClick={addTwoCart}>Add Two</button>
            <button onClick={removeOneCart}>Remove One</button>
            <button onClick={removeLineCart}>Remove Line</button>
            <button onClick={removeUserCart}>Remove User</button>
            <hr/>
            <b>Product 테스트</b><br/>
            <button onClick={productList}>Product List</button>
            <button onClick={productOne}>Product One</button>
            <button onClick={insertProduct}>Insert Product</button>
            <button onClick={deleteProduct}>Delete Product</button>
            <button onClick={updateProduct}>Update Product</button>
            <hr/>
            <b>Seller 테스트</b><br/>
            <button onClick={sellerList}>Seller List</button>
            <button onClick={sellerOne}>Seller One</button>
            <button onClick={insertSeller}>Insert Seller</button>
            <button onClick={deleteSeller}>Delete Seller</button>
            <button onClick={updateSeller}>Update Seller</button>
            <hr/>
            <b>Customer 테스트</b><br/>
            <button onClick={customerList}>Customer List</button>
            <button onClick={customerOne}>Customer One</button>
            <button onClick={insertCustomer}>Insert Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={updateCustomer}>Update Customer</button>
            <hr/>

        </div>
    )
}

export default Test;