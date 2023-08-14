import { useDispatch } from 'react-redux';
import { StyledButton, StyledListItem } from './ContactsItem.styled';
import { deleteContact } from 'redux/reducers/contactsReducer';

const ContactsItem = ({ name, number, id, onClear }) => {
  const dispatch = useDispatch();

  const onRemoveBtnClick = id => {
    removeContactFromList(id);
  };

  const removeContactFromList = id => {
    dispatch(deleteContact(id));
    onClear();
  };

  return (
    <StyledListItem>
      {name}: {number}
      <StyledButton onClick={() => onRemoveBtnClick(id)}>Remove</StyledButton>
    </StyledListItem>
  );
};

export default ContactsItem;
