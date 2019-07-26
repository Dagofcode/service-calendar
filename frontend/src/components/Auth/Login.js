import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import AuthService from "../../services/auth";

class NormalLoginForm extends Component {
  state = {
    authService: new AuthService()
  };
  componentWillMount() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) return this.props.history.push("/profile");
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.state.authService
          .login(values)
          .then(response => {
            //aqui deberia de ir una notificacion o un swal o un toastr
            console.log(response);
            localStorage.setItem(
              "loggedUser",
              JSON.stringify(response.data.user)
            );
            this.props.history.push("/profile");
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="form-container">
          <Form.Item label="email">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <button href="">register now!</button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default WrappedNormalLoginForm;
