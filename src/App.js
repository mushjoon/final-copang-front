import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteMain from './RouteMain';
//App.js 수정 다시함 또다시함
const App=()=>{
    return(
        <Router>
            <RouteMain/>
        </Router>
    )
}

export default App;