import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component{
    // 父组件传的参数
    static propTypes={
        refreshName: PropTypes.func.isRequired
    }
    // 方法
    search= () => {
        console.log('---',this.props.refreshName)
        let name = this.nameInput.value
        // 输入框的参数传到父组件
        this.props.refreshName(name)
    }

    render() {
        console.log(this.props.refreshName)
        return (
            <div>
                {/*输入框定义参数*/}
                <input type='text' ref={(input => this.nameInput = input)}/>
                {/*点击按钮*/}
                <button onClick={this.search}>Search</button>
            </div>
        )
    }

}

export default Search