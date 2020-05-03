import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //显示传递过来的id
        return (<h2>List Page->{this.state.id}</h2>);
    }
    componentDidMount() {
        /*
        1. 组件接收传递过来的值的时候，可以在声明周期componentDidMount中进行，传递的值在this.props.match中。我们可以先打印出来,代码如下。
        2. 然后在浏览器的控制台中可以看到打印出的对象，对象包括三个部分:
            * patch:自己定义的路由规则，可以清楚的看到是可以产地id参数的。
            * url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
            * params：传递过来的参数，key和value值。
        明白了match中的对象属性，就可以轻松取得传递过来的ID值了。代码如下:
        */
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({ id: tempId })
    }
}

export default List;