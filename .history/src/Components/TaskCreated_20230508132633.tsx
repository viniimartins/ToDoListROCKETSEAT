import React, { useState } from "react"
import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        Checkbox
      </label>
    </div>
  );
}
