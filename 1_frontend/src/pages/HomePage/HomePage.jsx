import React from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import {
  StyledContainer,
  StyledFormSection,
  StyledFormHeadline,
} from './HomePage.style';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledFormSection>
        <StyledFormHeadline>
          Beauty salon clients appointments registration
        </StyledFormHeadline>
        <Form />
      </StyledFormSection>
      <List />
    </StyledContainer>
  );
};

export default HomePage;
