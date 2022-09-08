import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.btnBgTransWhite};
  color: ${({ theme }) => theme.color.black};
  padding: 8px 20px;

  border-radius: 5px;
  border-right: 1px solid ${({ theme }) => theme.color.btnBgTransWhite};
  border-top: 1px solid ${({ theme }) => theme.color.btnBgTransWhite};
  border-left: 1px solid ${(props) => (props.primary ? '#4D724D' : '#D81C23')};
  border-bottom: 1px solid ${(props) => (props.primary ? '#4D724D' : '#D81C23')};

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: 0.3s ease-in;

  margin: 3px;

  &:hover {
    border-right: 1px solid
      ${(props) => (props.primary ? '#4D724D' : '#D81C23')};
    border-top: 1px solid ${(props) => (props.primary ? '#4D724D' : '#D81C23')};
  }
`;
