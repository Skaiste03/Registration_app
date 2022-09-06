import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledMessage = styled.p`
  color: ${(props) => props.textColor};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  td input {
    border: none;
    padding: 0;
  }

  td input::placeholder {
    font-size: 16px;
    color: black;
  }

  td input:focus {
    outline: none;
  }

  thead {
    background-color: #4ac6d2;
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? '#4ac6d2' : '#9e15bf')};
  color: #fff;
  padding: 5px 20px;

  border: none;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    opacity: 0.9;
  }
`;
