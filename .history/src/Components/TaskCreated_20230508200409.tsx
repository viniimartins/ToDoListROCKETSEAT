import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";
import { TaskContent } from "./Task";

export function TaskCreated({ conclued, contend }: TaskContent) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function handleDeleteTask() {
    console.log("delete");
  }

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.checkmark} />
        <span className={checked ? styles.labelConclued : styles.label}>
          {contend}
        </span>
      </label>

      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
