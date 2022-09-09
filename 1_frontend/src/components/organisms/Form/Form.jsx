import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import TimeSelector from '../../atoms/TimeSelector';
import ErrorMessage from '../../atoms/ErrorMessage';
import {
  StyledHeadline,
  StyledForm,
  StyledInputDiv,
  StyledContainer,
  StyledMessage,
  StyledSubmitDiv,
} from './Form.style';
import api from '../../../shared/api';

const Form = () => {
  const [datePickerValue, onChange] = useState(new Date());
  const [time, setTime] = useState({
    hours: '8',
    minutes: '00',
  });
  const [message, setMessage] = useState('');
  const [client, setClient] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const addDate = () => {
    const year = datePickerValue.getFullYear();
    const month = datePickerValue.getMonth() + 1;
    const day = datePickerValue.getDate();

    const date = `${year}-${month}-${day}`;
    const hour = `${time.hours}:${time.minutes}`;

    setClient((prev) => ({ ...prev, date: date }));
    setClient((prev) => ({ ...prev, time: hour }));
  };

  // Create data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.addData(client);
      setMessage(response.message);

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <StyledContainer>
      <StyledHeadline>APPOINTMENTS REGISTRATION</StyledHeadline>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputDiv>
          <input
            type='text'
            id='name'
            placeholder='Name and Surname'
            onChange={(e) =>
              setClient((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </StyledInputDiv>
        <StyledInputDiv>
          <input
            type='email'
            id='email'
            placeholder='Email'
            onChange={(e) =>
              setClient((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </StyledInputDiv>
        <StyledInputDiv>
          <DateTimePicker
            format='y-M-d'
            locale='en'
            onChange={onChange}
            value={datePickerValue}
            clearIcon={null}
            disableClock={true}
          />
        </StyledInputDiv>
        <TimeSelector
          onChangeHours={(e) =>
            setTime((prev) => ({ ...prev, hours: e.target.value }))
          }
          onChangeMinutes={(e) =>
            setTime((prev) => ({ ...prev, minutes: e.target.value }))
          }
        />
        <StyledSubmitDiv onClick={addDate}>
          <input type='submit' id='submit' />
        </StyledSubmitDiv>
      </StyledForm>
      <StyledMessage>
        {message && <ErrorMessage text={message} />}
      </StyledMessage>
    </StyledContainer>
  );
};

export default Form;
