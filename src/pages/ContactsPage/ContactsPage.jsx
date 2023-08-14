import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';

import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { StyledContainer } from 'components/Container/Container.styled';
import {
  StyledContactsWrapper,
  StyledFormWrapper,
  StyledListWrapper,
  StyledPageWrapper,
  StyledParagraph,
  StyledSection,
  StyledTitle,
} from './ContactsPage.styled';
import { fetchAllContacts } from 'redux/reducers/contactsReducer';
import { useState } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const onChangeFilter = event => {
    const value = event.currentTarget.value.trim();
    setFilter(value);
  };

  const onClearFilterBtn = () => {
    setFilter('');
  };
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <StyledSection>
      <StyledContainer>
        <StyledPageWrapper>
          <StyledFormWrapper>
            <StyledTitle>You can add contacts!</StyledTitle>
            <ContactForm />
          </StyledFormWrapper>

          <StyledContactsWrapper>
            <StyledParagraph>Your contacts:</StyledParagraph>
            <Filter
              onChange={onChangeFilter}
              filterValue={filter}
              onClear={onClearFilterBtn}
            />
            <StyledListWrapper>
              <ContactsList filter={filter} onClear={onClearFilterBtn} />
            </StyledListWrapper>
          </StyledContactsWrapper>
        </StyledPageWrapper>
      </StyledContainer>
    </StyledSection>
  );
};

export default ContactsPage;
