import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Layout = ({ children }) => {
  return (
    <Container fluid="md">
      <Row className="justify-content-center vh-100">
        <Col className="my-5">
          <Card className="text-center my-5 shadow-sm">
            <Card.Body className="p-3 my-4">
              <Card.Title>React Firebase CRUD App</Card.Title>
              <Card.Text className="py-2">
                A simple CRUD (Create, Read, Update, and Delete) operations App using React Hooks, Context API and
                Firebase.
              </Card.Text>
              <Button variant="dark">Github</Button>
            </Card.Body>
          </Card>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default Layout