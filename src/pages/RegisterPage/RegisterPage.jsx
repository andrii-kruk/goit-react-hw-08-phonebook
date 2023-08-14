import RegisterForm from 'components/RegisterForm/RegisterForm';

import { StyledSection } from './RegisterPage.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { useSelector } from 'react-redux';
import {
  selectUserLoading,
  selectUserLoggedIn,
} from 'redux/reducers/authReducer';
import Loader from 'components/Loader/Loader';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const isLoading = useSelector(selectUserLoading);
  const isLoggedIn = useSelector(selectUserLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <StyledSection>
      <StyledContainer>
        {isLoading ? <Loader /> : <RegisterForm />}
      </StyledContainer>
    </StyledSection>
  );
};

export default RegisterPage;
