import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}
