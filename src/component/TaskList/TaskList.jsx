import styled from "styled-components";
import styles from './TaskList.module.css'
import { Task } from "../Task/Task";
import React, { useState, useEffect } from "react";

export const TaskList = ({ todo, setTodo }) => {

    useEffect(() => {
        setFiltered(todo)
    }, [todo])
    
    const [filtered, setFiltered] = useState([todo])

    const todoFiltered = (status) => {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }
   
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

    const todoClearCompleted = (status) => {
        if (status === false) {
            let newTodo = [...todo].filter(item => item.status)
            setFiltered(newTodo)
        }
    }  

    return (
        
        <div className={styles.flexWrapper}>
            <h2>Task list</h2>
            <div className={styles.TodosWrapper}>
                {filtered.map((item, idx) =>
                    (<div key = {idx} className={styles.todoItem}>
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
                <p className="items-left">{ todo.filter(item=>item.status).length} items left </p>
                <button  onClick={()=>todoFiltered('all')}>All </button>
                <button  onClick={()=>todoFiltered(true)}>Active</button>
                <button  onClick={()=>todoFiltered(false)}>Completed</button>
                <button  onClick={()=>todoClearCompleted(false)}>Clear completed</button>            
            </div>
        </div>
        
    )
}
