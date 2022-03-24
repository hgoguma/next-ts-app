import TextField from '@mui/material/TextField';

const TextFieldComponent = ({ placeholder, handleChange }) => {
  return (
    <TextField
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default TextFieldComponent;