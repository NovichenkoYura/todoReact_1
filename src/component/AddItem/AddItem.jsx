import PropTypes from "prop-types";
// import styled from "styled-components";
import styles from './AddItem.module.css'
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"

export const AddItem = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    console.log(value)
    
    const addTodo = () => {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true,
            }]
        )

        setValue('')
    
    }

    return (
        
    <div className={styles.flexWrapper}>
            <h1>ToDoList</h1>
          
        <div className={styles.addTodoWrapper}>
            <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id="desription-task"
                        placeholder="Type task"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        
                    />
            </div>
            <div className={styles.buttonWrapper}>
                <button id="add-task-btn" onClick={addTodo}>Add</button>
            </div>         
           
        </div>
    </div>  
    )
}

