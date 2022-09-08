import React, { useEffect, useState } from 'react';
import { StyledMessage } from './ErrrorMessage.style';

const ErrorMessage = ({ text }) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (text) {
      setErrorMessage(text);
    }
  }, [text]);

  const messageColor = () => {
    if (errorMessage.includes('not') || errorMessage.includes('deleted')) {
      return '#D81C23';
    } else {
      return '#4d724d';
    }
  };

  return <StyledMessage textColor={messageColor}>{errorMessage}</StyledMessage>;
};

export default ErrorMessage;
