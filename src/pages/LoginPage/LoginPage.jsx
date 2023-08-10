import { StyledContainer } from 'components/Container/Container.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import { StyledSection } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <LoginForm />
      </StyledContainer>
    </StyledSection>
  );
};

export default LoginPage;
