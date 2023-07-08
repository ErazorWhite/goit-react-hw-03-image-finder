import { StyledButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledButton onClick={onClick}>Load more</StyledButton>
    </div>
  );
};
