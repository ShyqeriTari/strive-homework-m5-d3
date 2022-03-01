import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";
export default class BlogAuthor extends Component {

componentDidMount = () => {
  console.log(this.props)
}


  componentDidUpdate = (prevProps, prevState) => {
    if(this.props !== prevProps){
    console.log("MY PROPS" + this.props)
  }
  }

  render() {
    return (
      <Row>
        <Col xs={2} className="mx-3">
          <Image className="blog-author" src={this.props.avatar} roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6>{this.props.name + " " + this.props.surname}</h6>
        </Col>
      </Row>
    );
  }
}
