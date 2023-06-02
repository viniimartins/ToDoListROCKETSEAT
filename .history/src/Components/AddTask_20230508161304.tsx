import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";

export function AddTask() {
  // const [tasks, setTaks] = useState([]);

  function handleNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  function handleAddTask(event: React.ChangeEvent<HTMLInputElement>) {
    event?.preventDefault;
    console.log("add task");
  }

  return (
    <form className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
      />
      <button type="submit" className={styles.Button} onClick={handleAddTask}>
        <span className={styles.ButtonText}>Criar</span>
        <PlusCircle size={21} />
      </button>
    </form>
  );
}
