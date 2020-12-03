import React from 'react'
import {Redirect} from 'react-router-dom'
export default class Login extends React.Component {
    // 数据
    state={
        username:'',
        password:''
    }

    getClick =() => {
        console.log(this.nameInput.value)
        console.log(this.pasInput.value)
        // 更改数据
        this.setState({
            username: this.nameInput.value,
            password: this.pasInput.value,
        })
        // 掉接口,跳页面

    }

    render() {

        if(this.state.username) {
            return <Redirect to='/home'/>
        }

        return (
            <div className='app-main'>
                <h3>login</h3>
                <div>
                    <div>username:</div>
                    <div><input type='text' ref={(input => this.nameInput = input)} /></div>
                </div>
                <br/>
                <div>
                    <div>password:</div>
                    <div><input type='password' ref={(input => this.pasInput = input)} /></div>
                </div>
                <br/>
                <button onClick={this.getClick}>提交</button>
            </div>
        )
    }
}