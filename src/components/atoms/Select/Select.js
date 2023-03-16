import * as React from 'react';
import styles from './Select.module.css'

export default function Select({
    Text,
    Options
}) {

  

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        {Text}
        <select id='xyz' value={value} onChange={handleChange} className={styles.select}>
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
