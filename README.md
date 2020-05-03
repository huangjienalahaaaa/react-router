React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。这是官方的解释，虽然足以解释React Router，但我觉的还不够重视这个插件。就目前我的工作经验所知，凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用switch...case这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。

# v1.0 React Router 安装和基础环境搭建：

***使用npm安装React Router:***
> npm install --save react-router-dom

# v2.0 像制作普通网页一样使用ReactRouter
通过上节的学习，有小伙伴反应这和他们平时工作中见到的不太一样，现实中是每个页面都是一个完整的有状态组件，然后我们再进行跳转，而不是写在一个页面里的多个无状态组件。所以觉的不太适用，这节课就把上节课的案例，做成我们工作中的样子，或者说更贴合实际开发.还会讲解一下精确匹配的知识。

***exact精确匹配的意思：***
> 其实这个很好理解，从字面上就可以猜出结果，就是你的路径信息要完全匹配成功，才可以实现跳转，匹配一部分是不行的。

比如我们把Index的精准匹配去掉，你会发现，无论你的地址栏输入什么都可以匹配到Index组件，这并不是我们想要的结果。
> \<Route path="/" component={Index} \/\>


所以我们加上了精准匹配exact。你可以再试着访问一下List组件，来更深入的了解一下精准匹配。


# v3.0 ReactRouter动态传值-1：

现在已经解决了链接跳转的问题，那现在想象这样一个场景，在一个很多文章的列表页面，然后点击任何一个链接，都可以准确的打开详细的文章内容，这就需要靠传递文章ID，然后后台准确检索文章内容最后呈现。这个过程每次传递到详细页面的ID值都是不一样的，所以就需要路由有动态传值的能力。


# v4.0 ReactRouter动态传值-2：

上节课动态传递的值是写死的，缺少灵活性，但是我讲了很多动态传值的理论，也算是对React Router动态传值有了初步认识。这节课形象的模拟一个动态的数据列表，并把列表中的值传递到详细页中。其实这节课的知识点上节课都已经讲过了，算是一个小练习吧。

# v5.0 ReactRouter重定向-Redirect使用：

我认为Redirect(重定向)，你就掌握基本的两个知识点就可以了：

1. 标签式重定向:就是利用\<Redirect\>标签来进行重定向，业务逻辑不复杂时建议使用这种。
2. 编程式重定向:这种是利用编程的方式，一般用于业务逻辑当中，比如登录成功挑战到会员中心页面。

重定向和跳转有一个重要的区别，就是跳转式可以用浏览器的回退按钮返回上一级的，而重定向是不可以的。

***标签式重定向：***

这个一般用在不是很复杂的业务逻辑中，


***编程式重定向：***
编程式重定向就是不再利用\<Redirect\/\>标签，而是直接使用JS的语法实现重定向。他一般用在业务逻辑比较发杂的场合或者需要多次判断的场合。我们这里就不模拟复杂场景了，还是利用上边的例子实现一下，让大家看到结果就好。

比如直接在构造函数constructor中加入下面的重定向代码。
>  this.props.history.push("/home/");  


就可以顺利实现跳转，这样看起来和上面的过程是一样的。这两种方式的重定向你可以根据真实需求使用，这样能让你的程序更加的灵活。课后你可以试着模拟用户的登录过程试着用一下这样的跳转。


# v6.0 ReactRouter嵌套路由-1：

这节课开始学习嵌套路由，这种路由形式在互联网上也是比较常见的。比如我们后台的管理系统，大部分是用嵌套路由，来实现页面的总体划分。当然前端页面也是会有很多嵌套路由的实现，比如我们经常看的掘金网站，里边多是嵌套路由（比如说掘金里的沸点）

# v7.0 ReactRouter嵌套路由-2：

这节课我们就将最主要的知识点，嵌套路由。接着上节课我们继续添加我们的程序，把视频部分的嵌套路由制作完成。嵌套路由简单理解就是在子页面中再设置一层新的路由导航规则。