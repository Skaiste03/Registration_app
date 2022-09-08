import React from 'react';
import Form from '../../components/organisms/Form';
import List from '../../components/organisms/List';
import {
  StyledContainer,
  StyledSection,
  StyledWrapper,
} from './HomePage.style';

const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSection>
          <Form />
        </StyledSection>
        <StyledSection>
          <List />
        </StyledSection>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default HomePage;
