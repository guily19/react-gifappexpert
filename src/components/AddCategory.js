import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = (props) => {

  const { setCategories } = props;
  const [inputValue, setInputValue] = useState('');

  const handlOnSubmitForm = (e) => {
    e.preventDefault();
    if ( inputValue.trim().length > 2 ){
      setCategories((prev) => {
        return [inputValue, ...prev]
      });
      setInputValue('');
    }
  }

  const handlOnChangeInput = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <form onSubmit={handlOnSubmitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={handlOnChangeInput}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;