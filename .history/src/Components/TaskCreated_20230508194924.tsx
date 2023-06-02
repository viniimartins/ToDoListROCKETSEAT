import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";
import { TaskContent } from "./Task";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  conclued?: boolean;
}

export function TaskCreated({ conclued = false, contend }: TaskContent) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          conclued={false}
          onChange={handleChange}
        />
        <span className={styles.checkmark} />
        <span className={checked ? styles.labelConclued : styles.label}>
          {contend}
        </span>
      </label>

      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
