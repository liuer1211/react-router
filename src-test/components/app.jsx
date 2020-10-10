import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavList from './nav-list'

import About from '../views/about'
import Home from '../views/home'
import './app.css'

export default class App extends React.Component {
	render() {
		return (
			<div className='app-main'>
				<div className='app-tit'>
					这是一个react的路由练习
				</div>
				<div className='app-nav'>
					{/* 导航路由链接 */}
					<NavList to="/about">about</NavList>
					<NavList to="/home">home</NavList>
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