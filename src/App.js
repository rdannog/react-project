import React from "react";

export default class App extends React.Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O título 1",
        body: "Esse é o texto do corpo 1"
      }, {
        id: 2,
        title: "O título 2",
        body: "Esse é o texto do corpo 2"
      },{
        id: 3,
        title: "O título 3",
        body: "Esse é o texto do corpo 3"
      }
    ]
  };

  timeoutUpdate = null;

  componentDidMount(){
    this.handleTimeout();
  }
  
  componentDidUpdate(){
    this.handleTimeout()
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }
  handleTimeout() {
    const {posts, counter} = this.state;
    posts[0].title = "Mudei o título"
    
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter+1})
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state
    return (
      <div>
        <h1>{counter}</h1>
        {posts.map((posts, index) => (
          <div key={posts.body}>
            <h1 key={posts.id}>{posts.title}</h1>
            <p key={index}>{posts.body}</p>
          </div>
        ))}
      </div>
    )
  }
}
