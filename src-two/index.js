import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter, HashRouter} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/app'

import './index.css'

ReactDOM.render(
// HashRouter 会有一个#，通过这个# HTML 5 History进行前端跳转他的感觉像锚点
// BrowserHistory 很简洁没有#，但是需要 server 端支持
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    /*<HashRouter>
      <App />
    </HashRouter>*/
  ),

  document.getElementById('root')
)