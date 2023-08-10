import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { StyledContainer } from 'components/Container/Container.styled';
import {
  StyledContactsWrapper,
  StyledFormWrapper,
  StyledParagraph,
  StyledSection,
  StyledTitle,
} from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledFormWrapper>
          <StyledTitle>There you can find your contacts!</StyledTitle>
          <ContactForm />
        </StyledFormWrapper>

        <StyledContactsWrapper>
          <StyledParagraph>Your contacts:</StyledParagraph>
          <Filter />
          <ContactsList />
        </StyledContactsWrapper>
      </StyledContainer>
    </StyledSection>
  );
};

export default ContactsPage;
