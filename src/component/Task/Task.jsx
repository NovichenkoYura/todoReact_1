import styles from './Task.module.css'

export const Task = ({text}) => {
   

   
    return (
        <div className={styles.todoItem}>
            <p className={styles.description}>{ text}</p>
            <div className={styles.buttons}>
            <input   type="checkbox" />
            <button >Delete</button>
            </div>        
        </div>
    )
}

