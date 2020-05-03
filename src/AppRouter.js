import React from "react";
// 引入浏览器路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>JSPang.com</h2>;
}

function List() {
    return <h2>List-Page</h2>;
}

function AppRouter() {
    return (
        <Router>
            <ul>
                {/* Link就是上面引入的，在页面上会渲染成<a>便签 */}
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/">列表</Link> </li>
            </ul>
            {/* 
            1. Route:上面定义了Link，下面要定义怎么跳转 
            2. exact:精确匹配
            */}
            <Route path="/" exact component={Index} />
            <Route path="/list/" component={List} />
        </Router>
    );
}
export default AppRouter;