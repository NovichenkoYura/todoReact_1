import './App.css';
import { AddItem } from './component/AddItem/AddItem';
import { Footer } from './component/Footer/Footer';
import { TaskList } from './component/TaskList/TaskList';
import React, { useState } from 'react';


const App = (addTasks) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first',
    status: true,
    },
    {
      id: 2,
      title: 'Second',
    status: true,
    },
    {
      id: 3,
      title: 'Third',
    status: true,
    }

  ])
  const onBtnClick = () => { 

    setTodo([...todo, addTasks])
 
  }

  

  return (
    <div className="App">
      <button onClick={onBtnClick}>add</button>
      

      <AddItem todo={todo} setTodo={ setTodo}/>
      <TaskList todo={todo} setTodo={ setTodo}/>
      <Footer />
      
    </div>
  );
}

export default App;

