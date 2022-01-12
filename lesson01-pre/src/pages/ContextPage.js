import React, { Component } from 'react'
import { Context, UserContext } from '../Context'
import ConsumerPage from './ConsumerPage'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: { themeColor: "red"},
      user: { name: 'tony' }
    }
  }

  changeColor = () => {
    const { theme: { themeColor } } = this.state
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green' : 'red'
      }
    })
  }

  render() {
    const { theme, user } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>click</button>
        <Context.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage/>
            <UseContextPage/>
            <ConsumerPage/>
          </UserContext.Provider>
        </Context.Provider>
      </div>
    )
  }
}


/**
 * 如何使用context
 * step1: 创建context对象
 * ste2p: 创建provider，传递value
 * step3: 子组件消费value，三种途径
 *    1. 类组件：使用contextType
 *    2. 函数组件：useContext
 *    3. Consumer
 */

/**
 * 区别：
 * contextType
 *  1. 只能用在类组件
 *  2. 只能订阅单一的contextType来源
 * useContext
 *  1. 只能用在函数式组件或者自定义hook中
 *  2. 可以订阅多个Context
 * Consumer
 *  1. 不区分类组件  函数式组件
 *  2. 可以订阅多个Context
 */