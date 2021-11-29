import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./dialog.css";

export default class Dialog extends Component {
  constructor(props) {
    super(props);

    // 在body上创建一个div
    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    return createPortal(
      <div>
        <h3>Dialog</h3>
        {this.props.children}
      </div>,
      this.node
    );
  }
}
