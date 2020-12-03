import React from 'react'
import Search from '../components/search'
import UserList from '../components/user-list'

export default class Home extends React.Component {
    constructor (props){
        super(props) // 组件传值
        console.log(props)
    }
    state= {
        title:'列表',
        list: [
            {name:'哈哈哈',code:'123'},
            {name:'哈哈哈',code:'123'}
        ],
        searchName:''
    }
    // 方法,次函数 接受子组件参数，更改父组件参数
    refreshName= (searchName) => this.setState({searchName})

    render() {
        console.log(this.state.searchName)
        console.log(this.refreshName)
        return (
            <div className='app-main'>
                <h1>{this.state.title}</h1>
                {
                    this.state.list.map(
                        (item,index) =>
                        <div key={index}>
                            {item.name} {item.code}
                        </div>
                    )
                }
                {/*父组件传一个方法*/}
                <Search refreshName={this.refreshName}></Search>
                {/*父组件传一个参数*/}
                <UserList searchName={this.state.searchName}></UserList>
            </div>
        )
    }
}