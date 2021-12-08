import React, { Component } from 'react'

export default class ChildPage extends Component {
  render() {
    const {themeColor} = this.props.theme
    console.log(themeColor)
    return (
      <div>
        <h3 className={themeColor}>ChildPage</h3>
      </div>
    )
  }
}
