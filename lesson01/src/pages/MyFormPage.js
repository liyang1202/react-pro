import React, { Component } from "react";
import LFormCreate from '../components/LFormCreate'

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@LFormCreate
class MyFormPage extends Component {
  submit = () => {
    const { validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sy-log
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>FormPage</h3>
            {getFieldDecorator("name", { rules: [nameRules] })(
              <input
                placeholder="please input ur name"
              />
            )}
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <input
                type="password"
                placeholder="please input ur password"
              />
            )}
          <button type="primary" onClick={this.submit}>
            提交
          </button>
      </div>
    );
  }
}

export default MyFormPage;
