import React from 'react';

import { TextField, withStyles } from '@material-ui/core';

interface MovieTextInputProps {
  label: string;
  placeholder: string;
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
  const { label, placeholder } = props;
  return <CustomTextField variant='outlined' label={label} placeholder={placeholder} />;
}
