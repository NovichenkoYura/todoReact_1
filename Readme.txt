// import logo from './logo.svg';
import './App.css';
import { AddItem } from './component/AddItem/AddItem';
import { Footer } from './component/Footer/Footer';
import { TaskList } from './component/TaskList/TaskList';
import React from 'react';

const App = ({addTasks}) => {
  const [tasks, setTasks] = React.useState([{ title: 'Work as software engineer in a foreign IT company' }])
  const onBtnClick = () => {
    console.log('btn was clicked')

    setTasks([...tasks, { title: addTasks}])
    console.log(tasks.length)
  }
  return (
    <div className="App">
      <button onClick={onBtnClick}>add</button>
      

      <AddItem addTasks = 'ffff'/>
      <TaskList tasks={ tasks}/>
      <Footer />
      
    </div>
  );
}

export default App;
