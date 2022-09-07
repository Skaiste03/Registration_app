import { StyledButton } from './Button.style';

const Button = ({ action, text, primary }) => {
  return (
    <StyledButton primary={primary} onClick={action}>
      {text}
    </StyledButton>
  );
};

export default Button;
