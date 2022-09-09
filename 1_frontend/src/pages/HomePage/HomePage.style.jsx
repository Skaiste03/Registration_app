import styled from 'styled-components';
import image from '../../assets/images/bg-img.jpg';

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  min-height: 100vh;

  background-image: url(${image});
  background-position: 50% 50%;
  background-size: cover;
`;
