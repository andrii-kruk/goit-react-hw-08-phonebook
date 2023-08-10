import { StyledButton, StyledListItem } from './ContactsItem.styled';

const ContactsItem = () => {
  return (
    <StyledListItem>
      Name: Phone number <StyledButton>Remove contact</StyledButton>
    </StyledListItem>
  );
};

export default ContactsItem;
