import React, { Component } from 'react'
import ChildPage from './ChildPage'

export default class ParentPage extends Component {
  render() {
    const state = {
      theme: {
        themeColor: 'red'
      }
    }
    return (
      <div>
        <h3>ParentPage</h3>
        <ChildPage theme={state.theme}/>
      </div>
    )
  }
}

