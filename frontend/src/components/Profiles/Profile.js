import React, { useState, useEffect } from "react";
import { DatePicker, Input, Button, Tabs, Spin } from "antd";
import dateFn from "date-fns";
import axios from "axios";
import useForm from "../../hooks/useForm";
import imgDefault from "../../images/default.jpeg";

const baseURL = "https://service-calendar.herokuapp.com";
//const baseURL = 'http://localhost:3000'
const { TabPane } = Tabs;
const Profile = props => {
  const [form, handleInput, setForm] = useForm();
  //const [updateForm, editHandleInput] = useForm();

  const [posts, setPosts] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")));
  const id = user._id;
  useEffect(() => {
    axios
      .get(`${baseURL}/posts/author/${id}`)
      .then(({ data: { posts } }) => {
        setPosts(posts);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
        const arr = posts.filter(post => post._id !== data.post._id);
        console.log(arr);
        setPosts(arr);
      })
      .catch(err => {
        console.log(err);
      });

    // axios
    //   .delete(`http://localhost:3000/calendar/${id}`)
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const handleSubmit = value => {
    const author = user._id;

    axios
      .post(`${baseURL}/posts`, { form, author })
      .then(({ data: { post } }) => {
        //const arr = posts.filter(post => post._id === data.post._id)
        setPosts([...posts, post]);
        console.log(posts);
      })
      .catch(err => {});

    // posts.map((post, i) => {
    //   let [month, day, year] = post.date.split(" ");
    //   const obj = {
    //     day,
    //     month,
    //     year,
    //     post: post._id
    //   };

    //   axios
    //     .post("http://localhost:3000/calendar", { ...obj })
    //     .then(calendar => {})
    //     .catch(err => {
    //       console.log(err);
    //     });
    // });
  };
  const updatePost = id => {
    console.log("inside update");
    axios
      .patch(`${baseURL}/posts/${id}`, { form })
      .then(({ data }) => {
        console.log(data);
        setPosts(prevState => {
          return {
            ...prevState,
            post: data.post
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (posts.length !== 0 && user.role === "PROVIDER") {
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
                <TabPane tab="Create a Post" key="2">
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
                      <Button
                        type="primary submit"
                        onClick={handleSubmit}
                        onSubmit={() => useEffect}
                      >
                        {" "}
                        Submit
                      </Button>
                    </form>
                  </div>
                </TabPane>
                <TabPane tab="All your events" key="3">
                  <div id="provider-events">
                    {console.log("inside render", posts)}
                    {posts.reverse().map((post, i) => {
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
                          <DatePicker fullscreen={false} onChange={onSelect} />
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
                    })}
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
        <div className="right-box">
          <h1>Posts you saved.</h1>
        </div>
      </div>
    );
  } else {
    return <Spin />;
  }
};

export default Profile;
