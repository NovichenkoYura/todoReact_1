// import logo from './logo.svg';
import './App.css';
import { AddItem } from './component/AddItem/AddItem';
import { Footer } from './component/Footer/Footer';
import { TaskList } from './component/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <AddItem />
      <TaskList/>
      <Footer />
      
    </div>
  );
}

export default App;
