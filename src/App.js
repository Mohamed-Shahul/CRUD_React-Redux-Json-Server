import React from 'react'
import Navbar from './Components/Navbar'
import AddTask from './Components/AddTask'
import { Col, Container, Row } from 'react-bootstrap'
import TaskList from './Components/TaskList'
// import Counter from './Redux/Counter'

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask/>  
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <TaskList/>
        </Col>
      </Row>
      {/* <Counter/> */}
    </Container>
  )
}

export default App
