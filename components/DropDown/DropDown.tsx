import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import styles from './DropDown.module.scss';

interface IDropDownProps {
  children?: never;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (newValue: string) => void;
}

export const DropDown: FC<IDropDownProps> = ({ value, options, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="brand-label">Brand</InputLabel>
      <Select
        classes={{
          outlined: 'false',
          filled: 'false',
        }}
        className={styles.dropdown}
        labelId="brand-label"
        id="brand-select"
        value={value}
        label="Brand"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem key={uuidv4()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
