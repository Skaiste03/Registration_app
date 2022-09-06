import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { StyledForm, StyledInputDiv } from './Form.style';

const Form = () => {
  const [value, onChange] = useState(new Date());

  console.log();
  return (
    <StyledForm action='submit'>
      <StyledInputDiv>
        <input type='text' id='name' placeholder='Name' />
      </StyledInputDiv>
      <StyledInputDiv>
        <input type='email' id='email' placeholder='Email' />
      </StyledInputDiv>
      <StyledInputDiv>
        <DateTimePicker onChange={onChange} value={value} clearIcon={null} />
      </StyledInputDiv>
      <StyledInputDiv>
        <input type='submit' id='submit' />
      </StyledInputDiv>
    </StyledForm>
  );
};

export default Form;
