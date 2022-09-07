import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import TimeSelector from '../../atoms/TimeSelector';
import { StyledForm, StyledInputDiv, StyledMessage } from './Form.style';
import api from '../../../shared/api';

const Form = () => {
  const [datePickerValue, onChange] = useState(new Date());
  const [time, setTime] = useState({
    hours: '8',
    minutes: '00',
  });
  const [client, setClient] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  const addDate = () => {
    const year = datePickerValue.getFullYear();
    const month = datePickerValue.getMonth() + 1;
    const day = datePickerValue.getDate();

    const date = `${year}-${month}-${day}`;
    const hour = `${time.hours}:${time.minutes}`;

    setClient((prev) => ({ ...prev, date: date }));
    setClient((prev) => ({ ...prev, time: hour }));
  };

  const messageColor = () => {
    if (message.includes('not')) {
      return 'red';
    } else {
      return 'green';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.addData(client);

    setMessage(response.message);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputDiv>
          <input
            type='text'
            id='name'
            placeholder='Name'
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
            format='y-MM-dd'
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
        <StyledInputDiv onClick={addDate}>
          <input type='submit' id='submit' />
        </StyledInputDiv>
      </StyledForm>
      {message && (
        <StyledMessage textColor={messageColor}>{message}</StyledMessage>
      )}
    </>
  );
};

export default Form;
