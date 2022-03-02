import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";


export default class BlogList extends Component {

state = {blogs: []}

fetchData = async() => {
  try {

    const response = await fetch("http://localhost:3001/blogs")
    const data = await response.json()

if (response.ok){
    this.setState({blogs:data})
    console.log(data)
    console.log(this.state.blogs)
}
  } catch (error) {
    console.log(error)
  }
}

componentDidMount = () => {
  this.fetchData()
}

componentDidUpdate = (prevProps, prevState) => {
  if(prevState === this.state.blogs){
  this.fetchData()
  }
}

  render() {
    return (
      <>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post._id} style={{ marginBottom: 50 }}>
            <BlogItem {...post} />
          </Col>
        ))}
      </Row>
      <Row>
        {this.state.blogs.map(blog =>(
         
        <Col key={blog.id}>
            <BlogItem {...blog} />
            </Col>
           ))
  }
      </Row>
      </>
    );
  }
}
