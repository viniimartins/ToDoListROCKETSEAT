import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";

type Props = {
  key: string;
  contend: string;
  conclued: number;
  onDeleteComent: (task: string) => void;
};

export function TaskCreated({
  key,
  contend = 0,
  conclued,
  onDeleteComent,
}: Props) {
  const [checked, setChecked] = useState(false);
  const [className, setClassName] = useState("class1 class2 class3")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function handleDeleteTask() {
    onDeleteComent(contend);
  }

  const handleClassNameChange = (event) => {
    setClassName(event.target.value);
  };

  const countClasses = () => {
    const classes = className.split(" ");
    return classes.length;
  };

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
