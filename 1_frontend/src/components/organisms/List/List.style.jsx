import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;

  background: ${({ theme }) => theme.color.bgTransWhite};

  padding: 30px;
  margin: 10px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (min-width: 1100px) {
    border-radius: 10px;
    align-items: center;
  }
`;

export const StyledHeadline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.grey};

  h3 {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const StyledMessage = styled.div`
  height: 30px;
`;

export const StyledTable = styled.table`
  display: inline-block;
  border-collapse: collapse;

  td {
    padding: 5px;
  }

  th {
    padding: 15px 0px;
  }

  td input {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};

    border: none;

    padding: 14px 0px;
    background-color: ${({ theme }) => theme.color.btnBgTransWhite};
    cursor: pointer;
  }

  td input::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.black};
  }

  td input:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};

    cursor: text;
  }

  thead {
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledButtonTd = styled.td`
  display: flex;
  align-items: center;
`;
