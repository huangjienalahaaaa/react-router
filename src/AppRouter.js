import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
import './index.css'

function AppRouter() {
    // 1.模拟后台得到的json数据-> 模拟从后台得到了JSON字符串，并转换为了对象（我们只是模拟，就不真的去远端请求数据了）。
    let routeConfig = [
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video/', title: '视频教程', exact: false, component: Video },
        { path: '/workplace/', title: '职场技能', exact: false, component: Workplace }
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            // 2.循环Link区域-> 这时候一级导航就不能是写死了，需要根据得到的数据进行循环出来。直接使用map循环就可以
                            routeConfig.map((item, index) => {
                                return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
                            })
                        }
                    </ul>
                </div>

                <div className="rightMain">
                    {
                        // 3.循环出路由配置：按照上面的逻辑把Route的配置循环出来。代码如下:
                        routeConfig.map((item, index) => {
                            return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                        })
                    }

                </div>
            </div>
        </Router>
    );
}


export default AppRouter;