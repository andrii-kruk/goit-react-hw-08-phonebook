import { Link } from 'react-router-dom';
import {
  StyledDescription,
  StyledItem,
  StyledList,
  StyledSection,
  Styledtitle,
} from './HomePage.styled';
import { StyledContainer } from 'components/Container/Container.styled';
const HomePage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Styledtitle>Welcome to Our App!</Styledtitle>
        <StyledDescription>
          Discover the benefits of using our amazing application.
        </StyledDescription>
        <StyledList>
          <StyledItem>Effortlessly manage your contacts.</StyledItem>
          <StyledItem>Streamline your communication.</StyledItem>
          <StyledItem>
            Enhance your profile with customization options.
          </StyledItem>
          <StyledItem>And much more!</StyledItem>
        </StyledList>

        <StyledDescription>
          You can <Link to="register">register</Link> or 
          <Link to="login"> login</Link>.
        </StyledDescription>
      </StyledContainer>
    </StyledSection>
  );
};

export default HomePage;
