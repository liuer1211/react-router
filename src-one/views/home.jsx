import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavList from '../components/nav-list'

import Message from '../home/message'
import News from '../home/news'

import './home.css'

export default function Home() {
  return (
	  <div className='home-main'>
		<div className='home-nav'>
			<NavList to='/home/news'>news</NavList>
			<br/>
			<NavList to='/home/message'>message</NavList>
		</div>
		<div className='home-con'>
			<Switch>
				<Route path='/home/news' component={News}/>
				<Route path='/home/message' component={Message}/>
				<Redirect to='/home/news'/>
			</Switch>
		</div>  
	  </div>
	)
}