import styles from './Task.module.css'

export const Task = (props) => {

   
    return (
        <div className={styles.todoItem}>
            <p className={styles.description}>{ props.text}</p>
            <div className={styles.buttons}>
            <input   type="checkbox" />
            <button >Delete</button>
            </div>        
        </div>
    )
}

