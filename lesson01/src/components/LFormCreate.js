import React, { Component } from "react";

export default function LFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }

    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    };

    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return (InputCmp) => {
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.setState[field] || "",
          onChange: this.handleChange,
        });
      };
    };

    getFieldsValue = () => {
      return { ...this.status };
    };

    getFieldValue = (field) => {
      return this.state[field];
    };

    validateFields = (callback) => {
      let errors = {};
      const state = { ...this.state };
      for (let field in this.options) {
        if (state[field] === undefined) {
          errors[field] = "error";
        }
        console.log("item", field);
      }

      if (JSON.stringify(errors) === "{}") {
        // 没有错误信息
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };

    render() {
      return (
        <div className="border">
          <Cmp
            {...this.props}
            getFieldDecorator={this.getFieldDecorator}
            getFieldValue={this.getFieldValue}
            getFieldsValue={this.getFieldsValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
