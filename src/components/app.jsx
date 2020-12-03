import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './app.css'

import Login from '../pages/login'
import Home from '../pages/home'
 

export default class App extends React.Component {
	render() {

		return (
			<div className='app-main'>
				<Switch>
					<Route path='/login' component={Login}/>
					<Route path='/home' component={Home}/>
					<Redirect to='/login'/>
				</Switch>
			</div>
		)
	}
}