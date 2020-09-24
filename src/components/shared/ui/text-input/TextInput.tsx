import React from 'react';

import { TextField, withStyles } from '@material-ui/core';

interface MovieTextInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f50057',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f50057',
      },
      '&:hover fieldset': {
        borderColor: '#f50057',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f50057',
      },
    },
  },
})(TextField);

export default function MovieTextField(props: MovieTextInputProps) {
  const { value, label, placeholder, setState } = props;
  return (
    <CustomTextField
      onChange={(e) => setState(e.currentTarget.value)}
      variant='outlined'
      label={label}
      placeholder={placeholder}
      value={value}
    />
  );
}
