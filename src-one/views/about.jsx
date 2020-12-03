import React from 'react'

import './about.css'
// 引入连接函数
import {connect} from 'react-redux'
import {increment} from '../redux/actions'

export class About extends React.Component {
    state={
        count: 1
    }
    // 加
    jia = () => {
        this.props.increment(this.state.count)
    }
  render() {
      console.log('-',this.props.counter.count) // 修改后的值，有默认
      console.log('-',this.state.count) // 页面定义的常量
    return (
        <div className='about-main'>
            <div>结果：{this.props.counter.count}</div>
            <div>相加的数：{this.state.count}</div>
            <button onClick={this.jia}>点击相加</button>
        </div>
    )
  }
}

// 向外暴露连接App组件的包装组件
export default connect(
    state => ({counter: state.counter}), // 刚进来，默认返回 0 ；执行方法后，修改值
    {increment}
)(About)
