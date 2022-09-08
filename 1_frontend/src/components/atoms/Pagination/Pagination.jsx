import { useEffect, useState } from 'react';
import { StyledPagination, StyledButton } from './Pagination.style';

const Pagination = ({ pages, action, currentPage }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    function pagination() {
      const array = [...Array(pages).keys()].map((x) => x + 1);
      setButtons(array);
    }

    pagination();
  }, [pages]);

  return (
    <StyledPagination>
      {buttons &&
        buttons.map((button) => (
          <StyledButton
            active={`${currentPage === button}`}
            key={button}
            onClick={() => action(button)}
          >
            {button}
          </StyledButton>
        ))}
    </StyledPagination>
  );
};

export default Pagination;
