import styled from "styled-components";
import styles from './TaskList.module.css'
import { Task } from "../Task/Task";

export const TaskList = () => {
    return (
        <div className={styles.flexWrapper}>
            <h2>Task list</h2>
            <div className={styles.TodosWrapper}>
                <Task text='Work as software engineer in a foreign IT company'/>
                <Task text='fun'/>
                
            </div>
        </div>
        
    )
}

