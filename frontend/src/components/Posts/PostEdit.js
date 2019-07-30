import { Skeleton, List, Avatar, Icon } from "antd";
import React from "react";
import axios from "axios";
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

class PostEdit extends React.Component {
  state = {
    loading: false,
    posts: []
  };
  componentWillMount() {
    axios
      .get("http://localhost:3000/posts")
      .then(({ data }) => {
        //const { posts } = data;

        this.setState(prevState => ({
          ...prevState,
          posts: data.posts
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { loading } = this.state;
    //let [day, month] = this.props.match.params.id.split("-");

    if (this.state.posts.length !== 0) {
      return (
        <div>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={
                  !loading && [
                    <IconText type="star-o" text="156" />,
                    <IconText type="like-o" text="156" />,
                    <IconText type="message" text="2" />
                  ]
                }
                extra={
                  !loading && (
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  )
                }
              >
                <Skeleton loading={loading} active avatar>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PostEdit;
