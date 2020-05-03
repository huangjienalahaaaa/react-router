import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'

function AppRouter() {
    return (
        <Router>
            <ul>

                <li> <Link to="/">首页</Link> </li>
                {/* 2. 设置好规则后，就可以在Link上设置值了 */}
                <li><Link to="/list/123">列表</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            {/* 1.设置传递规则-> 这个设置是以:开始的，然后紧跟着你传递的key（键名称）名称 */}
            <Route path="/list/:id" component={List} />
        </Router>
    );
}

export default AppRouter;