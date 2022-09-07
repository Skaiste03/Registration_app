import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeadline = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

  h3 {
    font-size: 24px;
    font-weight: 700;
  }
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
