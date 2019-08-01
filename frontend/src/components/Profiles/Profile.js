/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
  DatePicker,
  Input,
  Button,
  Tabs,
  Spin,
  Upload,
  Icon,
  notification,
  message
} from "antd";
import dateFn from "date-fns";
import axios from "axios";
import useForm from "../../hooks/useForm";
import imgDefault from "../../images/default.jpeg";

const baseURL = "https://service-calendar2.herokuapp.com";
//const baseURL = "http://localhost:3000";
const { TabPane } = Tabs;

const Profile = props => {
  const [form, handleInput, setForm] = useForm();
  const [photo, setPhoto] = useState("");
  const [posts, setPosts] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")));
  const id = user._id;
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) return this.props.history.push("/");
    axios
      .get(`${baseURL}/posts/author/${id}`)
      .then(({ data: { posts } }) => {
        setPosts(posts);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const onSelect = value => {
    const currentMonth = dateFn.getMonth(value._d);
    const currentYear = dateFn.getYear(value._d);
    const currentDay = dateFn.getDate(value._d);

    const date = `${currentMonth} ${currentDay} ${currentYear}`;

    setForm(prevState => ({
      ...prevState,
      date
    }));
  };

  const deletePost = id => {
    axios
      .delete(`${baseURL}/posts/${id}`)
      .then(({ data }) => {
        openNotificationWithIcon("warning", "Your event has been deleted.");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: "Notification Title",
      description: message
    });
  };

  const handleSubmit = value => {
    const author = user._id;
    const updatedForm = form;

    updatedForm.photo = photo;

    axios
      .post(`${baseURL}/posts`, { updatedForm, author })
      .then(({ data: { post } }) => {
        setPosts([...posts, post]);
        openNotificationWithIcon(
          "success",
          "Your event has been created, check the calendar to see!"
        );
      })
      .catch(err => {});

    posts.map((post, i) => {
      let [month, day, year] = post.date.split(" ");
      const obj = {
        day,
        month,
        year,
        post: post._id
      };

      axios
        .post(`${baseURL}`, { ...obj })
        .then(calendar => {})
        .catch(err => {
          console.log(err);
        });
    });
  };
  const updatePost = id => {
    console.log("inside update");
    // const arr = posts;

    axios
      .patch(`${baseURL}/posts/${id}`, { form })
      .then(({ data: { post } }) => {
        openNotificationWithIcon("info", "Your event has been updated.");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const imageProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        const afile = new FormData();
        afile.append("photo", info.file.originFileObj);
        axios
          .post(`${baseURL}/upload`, afile)
          .then(({ data: { img } }) => {
            setPhoto({
              photo: img
            });
          })
          .catch(err => {
            console.log("what", err);
          });
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  if (user.role === "PROVIDER") {
    return (
      <div className="provider-container">
        <div className="provider-content">
          <div className="provider-sideBar">
            <div className="overlay2" />
          </div>

          <div className="provider-col">
            <div className="tabs">
              <Tabs defaultActiveKey="1" type="able-card" className="tabs">
                <TabPane tab="Profile" key="1" className="tabPane">
                  <div id="provider-profile">
                    <div className="profile-data">
                      <h1> EMAIL: </h1>
                      <h1>{user.email}</h1>
                    </div>
                    <div className="profile-data">
                      <h1> PASSWORD: </h1>
                      <h1>{user.password}</h1>
                    </div>
                    <div className="profile-data">
                      <h1> COMPANY NAME: </h1>
                      <h1>{user.company}</h1>
                    </div>
                    <div className="profile-data">
                      <h1> PHONE: </h1>
                      <h1>{user.phone}</h1>
                    </div>
                    <div className="profile-data">
                      <h1> ADDRESS: </h1>
                      <h1>{user.address}</h1>
                    </div>
                    <div className="profile-data">
                      <h1> WEBSITE: </h1>
                      <h1>{user.website}</h1>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Create an Event" key="2">
                  <div id="createPost">
                    <h1>Create an Event</h1>
                    <DatePicker fullscreen={false} onChange={onSelect} />

                    <form action="">
                      <Input
                        type="text"
                        name="title"
                        placeholder="Name of the event"
                        onChange={handleInput}
                      />
                      <Input.TextArea
                        rows={8}
                        name="description"
                        placeholder="Event description"
                        onChange={handleInput}
                      />
                      <Upload {...imageProps} name="photo">
                        <Button>
                          <Icon type="upload" /> Click to Upload
                        </Button>
                      </Upload>{" "}
                      <Button
                        type="primary submit"
                        onClick={handleSubmit}
                        onSubmit={() => useEffect}
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </TabPane>
                <TabPane tab="All your events" key="3">
                  <div id="provider-events">
                    {posts.length !== 0 ? (
                      posts.reverse().map((post, i) => {
                        return (
                          <div className="event-card" key={i}>
                            <Input
                              type="text"
                              name="title"
                              onChange={handleInput}
                              defaultValue={`${post.title}`}
                            />
                            <Input.TextArea
                              style={{ height: "200px" }}
                              name="description"
                              onChange={handleInput}
                              defaultValue={`${post.description}`}
                            />
                            <DatePicker
                              fullscreen={false}
                              onChange={onSelect}
                            />
                            <div className="event-buttons">
                              <Button
                                type="danger"
                                onClick={() => deletePost(post._id)}
                              >
                                Delete
                              </Button>
                              <Button onClick={() => updatePost(post._id)}>
                                {" "}
                                Edit{" "}
                              </Button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <h1>no posts</h1>
                    )}
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (user.role === "USER") {
    return (
      <div className="user-profile">
        <div className="left-box">
          <div className="overlay">
            <img src={imgDefault} alt="" />
            <div>
              <h1>{user.email}</h1>

              <p>Name: {user.name} </p>
              <p>Password: {user.password} </p>
              <p>Email {user.email} </p>
            </div>
          </div>
        </div>
        <div className="right-box" />
      </div>
    );
  } else {
    return <Spin />;
  }
};

export default Profile;
