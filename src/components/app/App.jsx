import { useEffect, useState } from 'react';
import { Filter } from 'components/filter/filter.jsx';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );
  const onAddNumber = newNumber => {
    const isIcluded = contacts.some(
      item =>
        item.name.toLocaleLowerCase() === newNumber.name.toLocaleLowerCase()
    );
    if (isIcluded) {
      alert(`${newNumber.name} is alredy in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newNumber]);
  };

  const onDelete = targetId => {
    setContacts(prevState => prevState.filter(item => item.id !== targetId));
  };

  const getFiltredMassive = () => {
    return contacts.filter(item => {
      const normalize = item.name.toLowerCase();
      const normalizeTarget = filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddNumber={onAddNumber} />
      <h2>Contacts</h2>
      <Filter onFilter={setFilter} value={filter} />
      {contacts.length > 0 && (
        <ContactList contacts={getFiltredMassive()} onDelete={onDelete} />
      )}
    </Container>
  );
}
