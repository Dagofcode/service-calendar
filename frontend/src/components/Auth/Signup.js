import React, { Component } from "react";
import { Form, Input, Button, Switch, AutoComplete } from "antd";
import AuthService from "../../services/auth";

class RegistrationForm extends Component {
  state = {
    authService: new AuthService(),
    checked: false
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
    let role = "USER";
    if (this.state.checked) role = "PROVIDER";
    this.props.form.validateFieldsAndScroll((err, values) => {
      values.role = role;
      console.log(values);
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
    const onChange = checked => {
      this.setState({ checked });
      console.log(`switch to ${this.state.checked}`);
    };

    return (
      <div className="signup-container">
        <div className="signup-form">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="email">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email"
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

            {this.state.checked ? (
              <Form.Item {...formItemLayout} label="Comapny">
                {getFieldDecorator("company", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your company name"
                    }
                  ]
                })(<Input placeholder="Please input your company name" />)}
              </Form.Item>
            ) : null}

            {this.state.checked ? (
              <Form.Item label="Phone Number">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(<Input style={{ width: "100%" }} />)}
              </Form.Item>
            ) : null}

            {this.state.checked ? (
              <Form.Item {...formItemLayout} label="address">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your address"
                    }
                  ]
                })(<Input placeholder="Please input your address" />)}
              </Form.Item>
            ) : null}
            {this.state.checked ? (
              <Form.Item label="Website">
                {getFieldDecorator("website", {
                  rules: [{ required: false, message: "Please input website!" }]
                })(
                  <AutoComplete
                    onChange={this.handleWebsiteChange}
                    placeholder="website"
                  >
                    <Input />
                  </AutoComplete>
                )}
              </Form.Item>
            ) : null}

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <div>
              Are you a Provider? <p />{" "}
              <Switch defaultChecked={false} onChange={onChange}>
                {" "}
              </Switch>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
