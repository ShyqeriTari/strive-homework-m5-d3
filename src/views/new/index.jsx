import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  state = { experience:{
    category: null,
    title: null,
    cover:null,
    readTime:{value: null,
              unit: null},
    author:{name: null,
            avatar: null},
    content: null,
  }}

  grabValue = (property, value) => {
    this.setState({ experience:{ ...this.state.experience, [property]: value }})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await fetch(
        "http://localhost:3001/blogs",
        {
          method: "POST",
          body: JSON.stringify(this.state.experience),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }



  render() {
    return (
      <Container className="new-blog-container pt-5">
    <Form onSubmit={(event) => this.handleSubmit(event)}>
      <Form.Group controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          onChange={(e) => this.grabValue("category", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={(e) => this.grabValue("title", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCover">
        <Form.Label>Cover</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Cover"
          onChange={(e) => this.grabValue("cover", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicReadTime">
        <Form.Label>Read time</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter value"
          onChange={(e) => this.grabValue("readTime", {...this.state.experience.readTime,"value": e.target.value})}
        />
        <Form.Control
          type="text"
          placeholder="Enter unit"
          onChange={(e) => this.grabValue("readTime", {...this.state.experience.readTime,"unit": e.target.value})}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => this.grabValue("author", {...this.state.experience.author,"name": e.target.value})}
        />
        <Form.Control
          type="text"
          defaultValue="https://ui-avatars.com/api/?name="
          onChange={(e) => this.grabValue("author", {...this.state.experience.author,"avatar": e.target.value})}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCover">
        <Form.Label>Content</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter content"
          onChange={(e) => this.grabValue("content", e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Container>
    );
  }
}
