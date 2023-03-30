// import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
// const name='Shahul'
// const check=true

function App() {
  const[tasks,taskFun]=useState([
    {
      id:1,
      text:'Doctor"s Appointment',
      day: 'jul7th',
      reminder:true
    },
    {
      id:2,
      text:'Meeting at School',
      day: 'jul7th',
      reminder:true
    },
    {
      id:3,
      text:'For food',
      day: 'jul7th',
      reminder:true
    }
  ])
  return (
    <div className="App">
      {/* <h1>Learn React Course</h1> */}
      {/* <h2>How is it {name} Do You Know This {check ? 'yes':'no'}</h2> */}
    <Header/>
    <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello From A Class</h1>
//   }
// }


export default App;
