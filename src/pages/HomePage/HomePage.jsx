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
      </StyledContainer>
    </StyledSection>
  );
};

export default HomePage;
