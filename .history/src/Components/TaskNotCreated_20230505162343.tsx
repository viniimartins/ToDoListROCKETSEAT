import styles from "./TaskNotCreated.module.css";
import Clipboard from "../assets/Clipboard.svg"


export function TaskNotCreate() {
  return (
    <div className={styles.taskBox}>
        <div className={styles.taskContent}>
            <img src={Clipboard} alt="" />
            <strong></strong>
            <p></p>
        </div>
    </div>
  );
}
