import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";
import { TaskContent } from "./Task";

const Props: {
  taskContent: TaskContent,
  onDeleteComent: (content: string) => void
}

export function TaskCreated(
  {taskContent: TaskContent,
  onDeleteComent: (content: string) => void} :Props
) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function handleDeleteTask() {
    onDeleteComent(taskContent.contend);
  }

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.checkmark} />
        <span className={checked ? styles.labelConclued : styles.label}>
          {taskContent.contend}
        </span>
      </label>

      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
