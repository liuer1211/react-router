import React from 'react'
import PropTypes from 'prop-types'

class UserList extends React.Component{
    static propTypes={
        searchName: PropTypes.string.isRequired
    }

    state={
        user: null
    }

    // 模仿异步
    //  在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(this.props.searchName,nextProps,nextContext)
        let searchName= nextProps.searchName
        if (searchName) {
            this.setState({
                user:{
                    name:'sss',
                    code:'333'
                }
            })
        }
    }

    render() {
        console.log('u---',this.props.searchName)
        console.log('u==',this.state.user)
        if (this.state.user) {
            return (
                <div>
                    <div>{this.state.user.name}</div>
                    <div>{this.state.user.code}</div>
                </div>
            )
        } else {
            return <div>No Data</div>
        }
    }
}
export default UserList