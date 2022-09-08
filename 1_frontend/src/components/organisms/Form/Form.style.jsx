import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 40px 40px 10px 40px;

  border-radius: 10px;

  background: ${({ theme }) => theme.color.bgTransWhite};
`;

export const StyledHeadline = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.color.grey};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  gap: 10px;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;

  .react-datetime-picker__wrapper {
    border: none;
    padding: 5px;

    background-color: ${({ theme }) => theme.color.btnBgTransWhite};
    input {
      cursor: pointer;
    }
  }

  #email,
  #name {
    padding: 10px;
    background-color: ${({ theme }) => theme.color.btnBgTransWhite};
    border: none;

    font-size: 16px;
    font-weight: 400;

    cursor: pointer;
  }

  #email:focus,
  #name:focus,
  .react-datetime-picker__wrapper input:focus {
    cursor: text;
  }

  #submit {
    padding: 10px 0px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};

    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.orange};

    cursor: pointer;
    transition: 0.6s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.color.btnBgTransWhite};
      color: ${({ theme }) => theme.color.orange};
    }
  }
`;

export const StyledMessage = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 5px;
`;
