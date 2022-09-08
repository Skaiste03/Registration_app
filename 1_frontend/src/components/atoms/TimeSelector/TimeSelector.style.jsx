import styled from 'styled-components';

export const StyledSelectDiv = styled.div`
  select {
    padding: 8px;
    font-size: 16px;

    border: none;

    background-color: ${({ theme }) => theme.color.btnBgTransWhite};

    cursor: pointer;

    option {
      cursor: pointer;

      &:hover {
        background-color: green;
      }
    }
  }

  span {
    font-size: 16px;
    margin: 0px 5px;
  }
`;
