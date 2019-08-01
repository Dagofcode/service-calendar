import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, Input } from "antd";
import image from "../../images/calendar-660670_1920.jpg";

const baseURL = "https://service-calendar2.herokuapp.com";
//const baseURL = "http://localhost:3000";

export default class PostDetail extends Component {
  state = {
    post: [],
    user: ""
  };
  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState(prevState => ({
      ...prevState,
      user: JSON.parse(localStorage.getItem("loggedUser"))
    }));

    axios
      .get(`${baseURL}/posts/${id}`)
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          post: data.post
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    if (this.state.post.length !== 0) {
      return (
        <div className="detail-container">
          <div className="detail-content">
            <div className="detail-image">
              <img
                src={this.state.post.photo ? this.state.post.photo : image}
                alt=""
              />
            </div>
            <div className="detail-info">
              <h1 style={{ margin: "10px" }}> {this.state.post.title} </h1>
              <h3 style={{ color: "red" }}>Description: </h3>
              <div className="detail-info-p">
                <p> {this.state.post.description} </p>
              </div>
              <div style={{ margin: "10px" }}>
                {this.state.user ? (
                  <Button type="danger" onClick={this.showModal}>
                    {" "}
                    I want to Volunteer{" "}
                  </Button>
                ) : null}
              </div>
              <Modal
                title="Submit"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <Input
                  type="text"
                  defaultValue={this.state.user ? this.state.user.email : null}
                />
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Phone" />
              </Modal>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="empty" />;
    }
  }
}
