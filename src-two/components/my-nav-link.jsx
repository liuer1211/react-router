import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  console.log('-1--',props)
  // children: "About"
  // className: "list-group-item"
  // to: "/about"
  // children: "Home"
  // className: "list-group-item"
  // to: "/home"
  console.log('-2--',...props)
  //
  console.log('-3--',{...props})
  // children: "About"
  // className: "list-group-item"
  // to: "/about"
  // children: "Home"
  // className: "list-group-item"
  // to: "/home"
  return <NavLink {...props} activeClassName='activeClass'/>
}