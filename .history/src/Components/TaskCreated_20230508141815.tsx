import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import Trash from "../assets/trash.svg";

interface Props {
  label: string;
}

export function TaskCreated({ label }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.taskCreated}>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.checkmark}></span>
      </div>
      <label className={styles.label}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <button>
        <img src={Trash} alt="trash" />
      </button>
    </div>
  );
}
