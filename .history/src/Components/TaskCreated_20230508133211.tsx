import React, { useState } from "react";
import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={styles.checkmark}></span>
        Checkbox
      </label>
    </div>
  );
}
