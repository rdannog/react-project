import React from "react";

export default class App extends React.Component{
  state = {
      posts:[
        {
          id: 1,
          title: "O título",
          body: "O corpo"
        },
        {
          id: 2,
          title: "O título 2",
          body: "O corpo 2"
        },
        {
          id: 3,
          title: "O título 3",
          body: "O corpo 3"
        }
      ]
    };

  render() {
    const { posts } = this.state
    return(
      <div>
       {posts.map(posts =>(
         <div>
           <h1 key={posts.id}>{posts.title}</h1>
           <p>{posts.body}</p>
         </div>
       ))}
      </div>
    )
  }
}
