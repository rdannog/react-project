import React from "react";
import './App.css'

export default class App extends React.Component {
  state = {
    counter: 0,
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return{ ...post, cover: photosJson[index].url }
    })
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state
    return (
      <section className="container">
        <div className="posts">
          {posts.map((posts, index) => (
            <div className="post">
              <img src={posts.cover} alt={posts.title}/>
              <div key={posts.body} className="post-content">
                <h1 key={posts.id}>{posts.title}</h1>
                <p key={index}>{posts.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}
