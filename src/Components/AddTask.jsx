import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTasksToServer } from '../Slice';
import { useDispatch } from 'react-redux';

const AddTask = () => {

    const dispatch=useDispatch()

    const[title,setTitle]=useState('')
    const[description,setdescription]=useState('')

// Add the Task's
    let addTask=(e)=>{
        e.preventDefault();
        if(title !== '' && description !== ''){
          dispatch(addTasksToServer({title,description}))
          setTitle('')
          setdescription('')
        }
    }
  return (
    <div className="my-5">
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Task Name" 
        onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Task Description" 
        onChange={(e)=>{setdescription(e.target.value)}} value={description}/>
      </Form.Group>

      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
            Add Task
        </Button>
      </div>
    </Form>
    </div>
  )
}
export default AddTask;