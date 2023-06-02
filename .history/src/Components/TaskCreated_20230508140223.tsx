import React, { useState } from "react";
import styles from "./TaskCreated.module.css";

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
      <label className={styles.checkbox}>
        <div>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.checkmark}></span>
        </div>
       
        <span className={styles.label}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </label>
      <button>TESTE</button>
    </div>
  );
}
