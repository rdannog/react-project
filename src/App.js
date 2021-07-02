import React from "react";
import './App.css'
import { Posts } from "./Components/Posts";

import { loadPosts } from "./Components/utils/loadPosts"

export default class App extends React.Component {
  state = {
    counter: 0,
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts()
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    )
  }
}
