import * as React from 'react';
import styles from './Select.module.css'
import SelectAtomProps from '../../themes'
import ImageAtomLocal from '../imageAtom/ImageAtomLocal';

//Flags
import ENG from "~/assets/static/icons/navbar/flags/Eng.png"
import SPA from "~/assets/static/icons/navbar/flags/Spa.png"
import JPN from "~/assets/static/icons/navbar/flags/Jpn.png"
import POR from "~/assets/static/icons/navbar/flags/Por.png"


export default function Select({
    Text,
    Options,
    optionsIcons
}) {

  const [value, setValue] = React.useState('');
  const [icon, setIcon] = React.useState(ENG);

  const handleChange = (event) => {
    setValue(event.target.value)
    setIcon(optionsIcons[event.target.value])
  };

  return (
    <div className='flex items-center content-center lg:ml-12'>
       <ImageAtomLocal src={icon} alt="icon" imagesize="px20" border="none" />
      <label>
        {Text}
        <select id='xyz' value={value} onChange={handleChange} className={`${styles.select} text-[18px] ml-2`}>
          {Options.map((option) => ( 
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
