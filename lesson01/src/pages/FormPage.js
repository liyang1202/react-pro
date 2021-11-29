import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@Form.create({})
class FormPage extends Component {
  submit = () => {
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sy-log
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator("name", { rules: [nameRules] })(
              <Input
                placeholder="please input ur name"
                prefix={<Icon type="user" />}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input
                type="password"
                placeholder="please input ur password"
                prefix={<Icon type="lock" />}
              />
            )}
          </Form.Item>
          <Button type="primary" onClick={this.submit}>
            提交
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormPage;
