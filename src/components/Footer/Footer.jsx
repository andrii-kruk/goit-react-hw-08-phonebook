import { StyledContainer } from 'components/Container/Container.styled';
import { StyledFooterWrapper, StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterWrapper>
          <p>goit-react-hw-08-phonebook</p>
        </StyledFooterWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
