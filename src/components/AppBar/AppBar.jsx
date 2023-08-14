import { useDispatch, useSelector } from 'react-redux';
import {
  logoutUserThunk,
  selectUserLoggedIn,
} from 'redux/reducers/authReducer';

import { StyledHeaderWrapper, StyledNav, StyledNavLink } from './AppBar.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { Button } from 'antd';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const dispatch = useDispatch();
  return (
    <header>
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            {!isLoggedIn ? (
              <>
                <StyledNavLink to="register">Register</StyledNavLink>
                <StyledNavLink to="login">Login</StyledNavLink>
              </>
            ) : (
              <StyledNavLink to="contacts">Contacts</StyledNavLink>
            )}
          </StyledNav>

          {isLoggedIn && (
            <Button onClick={() => dispatch(logoutUserThunk())}>Log Out</Button>
          )}
        </StyledHeaderWrapper>
      </StyledContainer>
    </header>
  );
};

export default AppBar;
