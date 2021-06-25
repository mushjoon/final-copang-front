import React from 'react';


const test = ({ location }) => {
    // name : ProductOne.name,
    // price : ProductOne.price,
    // entity : 2,
    // imageName : ProductOne.image,
    // userSID : 20,
    // productSID

    return (
        <div>
            test<br />
            {"userSID : " + location.state.userSID}<br />
            {"productSID : " + location.state.productSID}<br />
            {"entity : " + location.state.entity}<br />
            {"imageName : " + location.state.imageName}<br />
            {"price : " + location.state.price}<br />
            {"name : " + location.state.name}<br />

            <div className="prod-buy-quantity">
                <div className="prod-quantity__form">
                    <input type="text" value="1"
                        className="prod-quantity__input" maxLength="6"
                        autoComplete="off" readOnly style={{ float: 'left' }} />
                    <div style={{ display: 'TableCell', verticalAlign: 'top', float: 'left', height: '40px', width: '20px' }}>
                        <div style={{ float: 'left', width: '20px', height: '20px', borderBottom: '1px solid #ccc' }}><button className="prod-quantity__plus" type="button"><span className="glyphicon glyphicon-arrow-up" /></button></div>
                        <div style={{ width: '20px', height: '20px' }}><button className="prod-quantity__minus" type="button" disabled=""><span className="glyphicon glyphicon-arrow-down" /></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default test;