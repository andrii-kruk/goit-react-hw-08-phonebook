import { useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';
import {
  selectUserLoading,
  selectUserLoggedIn,
} from 'redux/reducers/authReducer';
import Loader from 'components/Loader/Loader';

import { StyledSection } from './LoginPage.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLoading = useSelector(selectUserLoading);
  const isLoggedIn = useSelector(selectUserLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledSection>
      <StyledContainer>
        {isLoading ? <Loader /> : <LoginForm />}
      </StyledContainer>
    </StyledSection>
  );
};

export default LoginPage;
