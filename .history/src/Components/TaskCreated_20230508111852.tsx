import styles from "./TaskCreated.module.css";

export function TaskCreated(){
  return (
    <div className={styles.checkboxButton}>
    <input type="checkbox" checked={isChecked} onChange={onCheck} />
    <div style={{ flex: 1, marginLeft: "10px" }}>{text}</div>
    <button onClick={onDelete}>Excluir</button>
  </div>
  )  
}