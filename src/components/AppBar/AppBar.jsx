import {
  StyledHeaderWrapper,
  StyledNav,
  StyledNavLink,
  StyledProfileLink,
} from './AppBar.styled';
import { StyledContainer } from 'components/Container/Container.styled';

const AppBar = () => {
  return (
    <header>
      <StyledContainer>
        <StyledHeaderWrapper>
          <StyledNav>
            <StyledNavLink to="register">Register</StyledNavLink>
            <StyledNavLink to="login">Login</StyledNavLink>
            <StyledNavLink to="contacts">Contacts</StyledNavLink>
          </StyledNav>

          <StyledProfileLink to="/profile">Profile</StyledProfileLink>
        </StyledHeaderWrapper>
      </StyledContainer>
    </header>
  );
};

export default AppBar;
