import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const TextFieldComponent = ({ placeholder, handleChange }) => {
  return (
    <TextField
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default TextFieldComponent

TextFieldComponent.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}