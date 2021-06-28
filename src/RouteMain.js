import {BrowserRouter, Route} from 'react-router-dom';
import RouteHyunjin from './hyunjin/RouteHyunjin';
import Cart from './purchase/Cart';
import Menu from './Menu';
//import ProductListApp from './youngjae/ProductListApp';
//import OrderPageApp from './purchase/OrderPageApp';
import MyCopang from "./member/MyCopang";

const RouteMain = () =>{
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Route path="/member/1" component={Cart}/>
                {/* <Route path="/member/2" component={OrderPageApp}/> */}
                {/* <Route path="/member/3" component={sds}/> */}
                {/* <Route path="/member/4" component={ProductListApp}/> */}
                <Route path="/member/5" component={MyCopang}/>
                <Route path="/member/6" component={RouteHyunjin}/>
                <Route path="/member/7" component={RouteHyunjin}/>
            </BrowserRouter>
        </div>
    )
}

export default RouteMain;