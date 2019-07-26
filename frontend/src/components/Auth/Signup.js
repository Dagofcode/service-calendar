import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import AuthService from "../../services/auth";

class RegistrationForm extends Component {
  state = {
    authService: new AuthService()
  };

  componentWillMount() {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) return this.props.history.push("/profile");
  }
  //   useEffect(() => {
  //     const loggedUser = localStorage.getItem("loggedUser");
  //     if (loggedUser) return props.history.push("/profile");
  //   }, [props.history]);

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.state.authService
          .signup(values)
          .then(response => {
            //aqui deberia de ir una notificacion o un swal o un toastr
            console.log(response);
            this.props.history.push("/login");
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
        <Form.Item label="password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
