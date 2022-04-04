import { TextField } from '@mui/material'
import React from 'react'

const InputComponent = ({value, name, handleOnChange}) => {

  

  return (
    <TextField
          sx={{
            margin: '1rem auto',
            padding: '1rem',
            width: '100%',
          }}
          label={name}
          name={name}
          id={name}
          autoComplete='off'
          color='info'
          onChange={handleOnChange}
          defaultValue={
            name === 'title' ? value : ''
          }
        />
  )
}

export default InputComponent