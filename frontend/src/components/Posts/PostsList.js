/* eslint-disable array-callback-return */
import { Skeleton, List, Icon } from "antd";
import React from "react";
import axios from "axios";
import dateFn from "date-fns";
import { Link } from "react-router-dom";
import image from "../../images/calendar-3045826_1920.jpg";

const baseURL = "https://service-calendar2.herokuapp.com";
//const baseURL = "http://localhost:3000";

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PostsList extends React.Component {
  state = {
    loading: false,
    posts: [],
    day: "",
    month: "",
    year: ""
  };
  componentWillMount() {
    const day = dateFn.getDate(this.props.match.params.day).toString();
    const month = dateFn.getMonth(this.props.match.params.day).toString();
    const year = dateFn.getYear(this.props.match.params.day).toString();
    this.setState({
      day,
      month,
      year
    });
    axios
      .get(`${baseURL}/posts`)
      .then(({ data }) => {
        let arr = this.updatePosts(data.posts);
        this.setState(prevState => ({
          ...prevState,
          posts: arr
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }
  updatePosts(posts) {
    let arr = [];

    posts.map(post => {
      let [mm, dd, yy] = post.date.split(" ");

      if (
        mm === this.state.month &&
        dd === this.state.day &&
        yy === this.state.year
      ) {
        arr.push(post);
      }
    });

    return arr;
  }

  render() {
    const { loading } = this.state;

    if (this.state.posts.length !== 0) {
      return (
        <div className="posts-container">
          <div className="posts-content">
            {this.state.posts.map((post, i) => (
              <div className="post-card" key={i}>
                <Link to={`/posts/detail/${post._id}`}>
                  <List
                    key={i}
                    itemLayout="vertical"
                    size="large"
                    dataSource={"1"}
                    renderItem={item => (
                      <List.Item
                        key={post.title}
                        extra={
                          !loading && (
                            <img
                              width={272}
                              alt="logo"
                              src={post.photo ? post.photo : image}
                            />
                          )
                        }
                      >
                        <Skeleton loading={loading} active avatar>
                          <Icon type="calendar" /> <p> {post.date} </p>
                          <List.Item.Meta
                            title={<p href={item.href}>{post.title}</p>}
                            description={`this event is sponsored by ${
                              post._id.name
                            }`}
                          />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="empty">
          <h1>There are no events here</h1>
        </div>
      );
    }
  }
}

export default PostsList;
