import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {

state = {undefined}

fetchData = async() => {
  try {

    const response = await fetch("http://localhost:3001/authors")
    const data = await response.json()
    
if (response.ok){
    this.setState(data)
    console.log(data)
}
  } catch (error) {
    console.log(error)
  }
}

componentDidMount = () => {
  this.fetchData()
}

  render() {
    return (
      <Row>
        {posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
