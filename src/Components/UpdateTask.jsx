import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskToServer } from '../Slice';

function MyVerticallyCenteredModal(props) {

  const{selectedTask}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()

  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')

// Update the task in Json server
  let updateTask = () => {
    props.onHide()
    dispatch(updateTaskToServer({id,title,description}))
  }

// Update & s Set the Selected Task in Update Input Boxes
 useEffect(()=>{ 
  if(Object.keys(selectedTask).length!==0){
    setTitle(selectedTask.title)
    setId(selectedTask.id)
    setdescription(selectedTask.description)
  }
 },[selectedTask])
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Task Name"
              onChange={(e) => { setTitle(e.target.value) }} value={title} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Task Description</Form.Label>
            <Form.Control type="text" placeholder="Task Description"
              onChange={(e) => { setdescription(e.target.value) }} value={description} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
            Update Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
