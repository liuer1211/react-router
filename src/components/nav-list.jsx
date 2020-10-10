import React from 'react'
import {NavLink} from 'react-router-dom'

import './nav-list.css'

export default function NavList(props) {
	// console.log(props) // to='/home'  props存入对象
	// debugger
	/* <NavLink>是<Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数，组件的属性有
	activeClassName(string)：设置选中样式，默认值为active
	activeStyle(object)：当元素被选中时，为此元素添加样式
	exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
	strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
	isActive(func)判断链接是否激活的额外逻辑的功能 */
	return <NavLink {...props} activeClassName='activeClass' className='nav'/>
}
