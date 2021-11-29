import React, { Component } from 'react'
import Dialog from '../components/Dialog'

export default class DialogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false
    }
  }
  render() {
    const {showDialog} = this.state
    console.log(showDialog)
    return (
      <div>
        <h3>DialogPage</h3>
        <button onClick={()=>{this.setState({showDialog:!showDialog})}}>toggle</button>
        {showDialog && <Dialog><p>这是一段文本</p></Dialog>}
      </div>
    )
  }
}