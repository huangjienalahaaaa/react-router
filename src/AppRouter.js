import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'
// 引入Home组件
import Home from './Pages/Home'

function AppRouter() {
    return (
        <Router>
            <ul>

                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/123">列表</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            {/* 定义Home组件跳转规则 */}
            <Route path="/home/" component={Home} />
        </Router>
    );
}

export default AppRouter;