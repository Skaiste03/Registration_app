import styled from 'styled-components';

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
