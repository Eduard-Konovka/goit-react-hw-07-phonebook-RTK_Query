import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useFetchContactsQuery } from 'redux/contacts/contact-api';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Spinner from 'components/Spinner/Spinner';
import 'App.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = contactsArray =>
    contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  return (
    <Container title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      {isFetching && <Spinner size={100} />}

      {!isFetching && (
        <Section title="Contacts">
          <Filter onChange={e => setFilter(e.target.value)} />
          <ContactList contacts={getVisibleContacts(contacts)} />
        </Section>
      )}

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
