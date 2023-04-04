import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask, getTasksFromServer, DeleteTaskInServer } from '../Slice';

const TaskList = () => {

  const dispatch=useDispatch()
  const { tasksList } = useSelector((state) => state.tasks)
  const [modalShow, setModalShow] = useState(false)

// Get The Data in Json Server
  useEffect(()=>{
    dispatch(getTasksFromServer())
  },[dispatch])

// Update the data in Json server
  let updateTask = (tasks) => {
    setModalShow(true)
    dispatch(setSelectedTask(tasks))
  }

// Delete the data in Json server
  let deleteTask = (id) => {
    dispatch(DeleteTaskInServer(id))
    dispatch(getTasksFromServer())
  }
 
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksList && tasksList.map((tasks,i) => (
              <tr key={tasks.id} className="text-center">
                <td>{i+1}</td>
                <td>{tasks.title}</td>
                <td>{tasks.description}</td>
                <td>
                  <Button className="mx-3" variant="primary" onClick={() => { updateTask(tasks) }}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="danger" onClick={() => { deleteTask(tasks.id) }}>
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default TaskList
