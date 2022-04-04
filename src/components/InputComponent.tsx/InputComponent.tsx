import { TextField } from '@mui/material'
import React from 'react'

type Props = {
  value: any
  name: string
  handleOnChange: () => void
}


const InputComponent = ({value, name, handleOnChange}: Props) => {

  

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