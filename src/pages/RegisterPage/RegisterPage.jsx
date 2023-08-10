import RegisterForm from 'components/RegisterForm/RegisterForm';

import { StyledSection } from './RegisterPage.styled';
import { StyledContainer } from 'components/Container/Container.styled';

const RegisterPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <RegisterForm />
      </StyledContainer>
    </StyledSection>
  );
};

export default RegisterPage;
