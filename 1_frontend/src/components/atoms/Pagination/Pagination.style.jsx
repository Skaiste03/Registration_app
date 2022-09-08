import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  gap: 2px;
`;

export const StyledButton = styled.button`
  min-width: 30px;

  background-color: ${(props) =>
    props.active === 'true' ? '#d29849' : '#ffffffdf'};

  border: 2px solid ${({ theme }) => theme.color.orange};
  border-radius: 5px;

  color: ${(props) => (props.active === 'true' ? '#f5f5f5' : '#212221')};
  font-size: 14px;
  font-weight: 500;

  padding: 5px;

  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
  }
`;
