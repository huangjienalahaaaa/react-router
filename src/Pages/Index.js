import React, { Component } from 'react';
// 引入Link组件
import { Link } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        // 模拟一个列表数组
        this.state = {
            list: [
                { uid: 123, title: '技术胖的个人博客-1' },
                { uid: 456, title: '技术胖的个人博客-2' },
                { uid: 789, title: '技术胖的个人博客-3' },
            ]
        }
    }
    render() {
        return (
            <ul>
                {
                    // 有了list数组后，再修改一下UI，进行有效的遍历，
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                {/* 引入后直接使用进行跳转就可以，但是需要注意一点，要用{}的形式，也就是把to里边的内容解析成JS的形式，这样才能顺利的传值过去。 */}
                                <Link to={'/list/' + item.uid}> {item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Index;