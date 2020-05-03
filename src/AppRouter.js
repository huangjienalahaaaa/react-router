import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'

//--关键代码------------start
import Video from './Pages/Video'
//--关键代码------------end

import './index.css'

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li> <Link to="/">博客首页</Link> </li>
                        {/*--关键代码------------start*/}
                        <li><Link to="/video/">视频教程</Link> </li>
                        {/*--关键代码------------end*/}
                        <li><Link to="">职场技能</Link> </li>
                    </ul>
                </div>

                <div className="rightMain">
                    <Route path="/" exact component={Index} />
                    {/*--关键代码------------start*/}
                    <Route path="/video/" component={Video} />
                    {/*--关键代码------------end*/}
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;