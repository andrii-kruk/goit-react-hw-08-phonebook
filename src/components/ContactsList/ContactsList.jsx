import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem/ContactsItem';
import { StyledList } from './ContactsList.styled';
import {
  selectContacts,
  selectContactsLoading,
} from 'redux/reducers/contactsReducer';
import ContactsLoader from 'components/ContactsLoader/ContactsLoader';

const ContactsList = ({ filter, onClear }) => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact => {
        const name = contact.name.toLowerCase();
        const number = contact.number.toLowerCase();
        if (filter) {
          return name.includes(filter) || number.includes(filter);
        } else {
          return true;
        }
      })
    : [];

  if (!contacts || !Array.isArray(contacts)) {
    return null;
  }

  return (
    <StyledList>
      {isLoading ? (
        <ContactsLoader />
      ) : (
        <>
          {filteredContacts.length === 0 && <div>Nothing Found</div>}
          {filteredContacts.map(({ name, number, id }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onClear={onClear}
            />
          ))}
        </>
      )}
    </StyledList>
  );
};

export default ContactsList;
