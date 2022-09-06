import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  gap: 10px;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;

  #email,
  #name {
    padding: 4px 5px;
  }

  #submit {
    padding: 6px 0px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: #9e15bf;
    color: #ffff;

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`;
