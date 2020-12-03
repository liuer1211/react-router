import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavList from './nav-list'

import About from '../views/about'
import Home from '../views/home'
import './app.css'

// import Barrage from 'barrage-ui'; // 弹幕插件blbl
// import example from 'barrage-ui/example.json'; // 组件提供的示例数据

// 只执行一次： constructor、componentWillMount、componentDidMount
// 执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate
// 有条件的执行：componentWillUnmount（页面离开，组件销毁时）
// 不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）
// 初始化
// 1、getDefaultProps()
// 设置默认的props，也可以用dufaultProps设置组件的默认属性.
// 2、getInitialState()
// 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
// 3、componentWillMount()
// 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
// 4、 render()
// react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
// 5、componentDidMount()
// 组件渲染之后调用，只调用一次。
// 更新
// 6、componentWillReceiveProps(nextProps)
// 组件初始化时不调用，组件接受新的props时调用。
// 7、shouldComponentUpdate(nextProps, nextState)
// react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
// 8、componentWillUpdata(nextProps, nextState)
// 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
// 9、render()
// 组件渲染
// 10、componentDidUpdate()
// 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
// 卸载
// 11、componentWillUnmount()
// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。

export default class App extends React.Component {
    // 数据
    state={
        routeList:[
            {name: 'about', rou: '/about'},
            {name: 'home', rou: '/home'}
        ],
        title: '这是一个react的路由练习'
    }
    // 在第一次render()之前回调
    componentDidMount() {
        // 加载弹幕
        // const barrage = new Barrage({
        //     container: 'barrage', // 父级容器或ID
        //     data: example, // 弹幕数据
        //     config: {
        //         // 全局配置项
        //         duration: 20000, // 弹幕循环周期(单位：毫秒)
        //         fontFamily: 'Microsoft Yahei', // 弹幕默认字体
        //         defaultColor: '#000', // 弹幕默认颜色
        //     },
        // });

        // // 新增一条弹幕
        // barrage.add({
        //     key: 'fctc651a9pm2j20bia8j', // 弹幕的唯一标识
        //     time: 1000, // 弹幕出现的时间(单位：毫秒)
        //     text: '这是新增的一条弹幕', // 弹幕文本内容
        //     fontSize: 26, // 该条弹幕的字号大小(单位：像素)，会覆盖全局设置
        //     color: '#0ff', // 该条弹幕的颜色，会覆盖全局设置
        // });

        // 播放弹幕
        // barrage.play();
    }
    // 点击事件
    // barragePlay = () => {
    //     // alert('666')
    // }
    render() {
        // 样式
        const itemStyle = {
            border: '1px dashed #ccc',
            margin: '10px',
            padding: '10px',
            boxShadow: '0 0 10px #ccc'
        }
        // const itemStyle1 = {
        //     width: '200px',
        //     height: '150px'
        // }

        return (
            <div className='app-main'>
                <div className='app-tit'>
                    {this.state.title}
                </div>

               {/* <div onClick={this.barragePlay}>这里是弹幕</div>
                <video controls style={itemStyle1} src="https://masking-danmaku-demo.netlify.app/videos/demo.mp4"></video>
                <div id='barrage' style={{background: '#eee',border: '1px solid #eee'}}></div>*/}

                <div className='app-nav dis-main' style={{marginTop:10+'px'}}>
                    {/* 导航路由链接 */}
                    {/*<NavList to="/about">about</NavList>*/}
                    {/*<NavList to="/home">home</NavList>*/}
                    {
                        this.state.routeList.map((m,index)=>{
                            return (
                                <div key={index} style={itemStyle}>
                                    <NavList to={m.rou}>{m.name}</NavList>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='app-con'>
                    {/* 可切换路由组件 */}
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                        <Redirect to='/about'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
