import React from 'react';
import Form from '../../components/organisms/Form';
import List from '../../components/organisms/List';
import {
  StyledContainer,
  StyledFormSection,
  StyledFormHeadline,
} from './HomePage.style';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledFormSection>
        <StyledFormHeadline>Appointments registration</StyledFormHeadline>
        <Form />
      </StyledFormSection>
      <List />
    </StyledContainer>
  );
};

export default HomePage;
