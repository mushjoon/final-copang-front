import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteMain from './RouteMain';

const App=()=>{
    return(
        <Router>
            <RouteMain/> 
        </Router>
    )
}

export default App;