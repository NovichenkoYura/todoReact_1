import PropTypes from "prop-types";
import styled from "styled-components";
import styles from './AddItem.module.css'

export const AddItem = () => {
    return (
        
    <div className={styles.flexWrapper}>
            <h1>ToDoList</h1>
          
        <div className={styles.addTodoWrapper}>
            <div className={styles.inputWrapper}>
                <input type="text" id="desription-task"/>
            </div>
            <div className={styles.buttonWrapper}>
                <button id="add-task-btn">Add</button>
            </div>         
           
        </div>
    </div>  
    )
}

const HeaderTask = styled.h1`
text-align: center;
`
const AddTodoWrapper = styled.div`
  display: flex;
  width: 500px;
  min-height: 40px;
  align-items: center;
  background-color: grey;
  border-radius: 5px;
  padding: 10px;
`
// export default function FriendList({ friends }) {
//   return (
//     <ul className={styles.friendList}>
//       {
//         friends.map(friend => {
//           const { avatar, name, isOnline, id } = friend;
//           return (
//             <li className={styles.item} key={id} >
//               <span  className={isOnline ? styles.online : styles.offline}></span>
//               <img class="avatar" src={avatar} alt="User avatar" width="48" />
//               <p class="name">{ name}</p>
//             </li>
//           )
//         })
//       }        

//     </ul>
//   )    

// }

// FriendList.propTypes = {
//   friends: PropTypes.array,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
//   id: PropTypes.number,
// }


// class Statistics extends Component{
// constructor(props) {
//     super(props);
//   }
//     render() {
//         return <div className="Statistics">
//             <h1 className="Statistics__title">Statistics</h1>
//             <div className="Statistics__list">
//                 <StatRange>Good: { this.props.good}</StatRange>
//                 {/* <StatRange>Neutral: { this.state.neutral}</StatRange>
//                 <StatRange>Bad: { this.state.bad}</StatRange> */}
                
//             </div>
//             </div>
        
// }
// }

// export default Statistics

// const StatRange = styled.span`
// display: flex;
//   justify-content: ;
// `

