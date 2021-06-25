import {BrowserRouter, Route} from 'react-router-dom';
import RouteHyunjin from './test/RouteHyunjin';
import Menu from './Menu';

const RouteMain = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Route path="/member/1" component={RouteHyunjin}/>
                <Route path="/member/2" component={RouteHyunjin}/>
                <Route path="/member/3" component={RouteHyunjin}/>
                <Route path="/member/4" component={RouteHyunjin}/>
                <Route path="/member/5" component={RouteHyunjin}/>
                <Route path="/member/6" component={RouteHyunjin}/>
                <Route path="/member/7" component={RouteHyunjin}/>
            </BrowserRouter>
        </div>
    )
}

export default RouteMain;