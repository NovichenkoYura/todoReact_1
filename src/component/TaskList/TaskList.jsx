import styled from "styled-components";
import styles from './TaskList.module.css'
import { Task } from "../Task/Task";

export const TaskList = ({todo, setTodo}) => {
   
    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }
    
    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })

        setTodo(newTodo)
    }

    console.log(todo)

    return (
        
        <div className={styles.flexWrapper}>
            <h2>Task list</h2>
            <div className={styles.TodosWrapper}>
                {todo.map(item =>
                    (<div className={styles.todoItem}>
                        <p className={!item.status? styles.close : styles.description} >{ item.title} </p>
                        <div className={styles.buttons}>
                        <input onClick={() => statusTodo(item.id)} type="checkbox" />
                            <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                        </div>        
                    </div>)                                
                    )                      
                }  
                
            </div>
            <div className={styles.footerWrap}>
                <p class="items-left">items left </p>
                <button id="all-tasks">All </button>
                <button id="active-tasks" >Active</button>
                <button id="completed-tasks">Completed</button>
                <button id="clear-completed-tasks">Clear completed</button>            
            </div>
        </div>
        
    )
}
