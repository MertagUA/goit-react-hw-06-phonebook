import { nanoid } from 'nanoid';
import { Div, Frame, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from '../redux/Slices/filterSlice';
import { add, remove, getContacts } from '../redux/Slices/contactsSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const onContactFormSubmit = (newContact, { resetForm }) => {
    const alreadyExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (alreadyExist) {
      resetForm();
      return alert(`${newContact.name} is already in contacts`);
    }

    const contact = { id: nanoid(), ...newContact };

    dispatch(add(contact));
    resetForm();
  };

  const FilterContacts = e => {
    dispatch(setFilter(e.target.value));
  };

  const onDeleteContact = id => {
    dispatch(remove(id));
  };

  const normalizedFiler = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFiler)
  );

  return (
    <Frame>
      <Div>
        <Title>Phonebook</Title>
        <ContactForm onContactFormSubmit={onContactFormSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filterValue} OnChange={FilterContacts} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Div>
    </Frame>
  );
}
