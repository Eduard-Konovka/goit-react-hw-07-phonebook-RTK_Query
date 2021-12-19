import { toast } from 'react-toastify';
import { useCreateContactMutation } from 'redux/contacts/contact-api';
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner/Spinner';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleCreate = async e => {
    e.preventDefault();
    createContact({
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    });
    e.currentTarget.reset();
    toast.success('Contact successfully created');
  };

  return (
    <form onSubmit={handleCreate} className={s.form}>
      <label className={s.label}>
        <p className={s.title}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
        />

        <p className={s.title}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={s.input}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={18} />}
          Create
        </Button>
      </label>
    </form>
  );
}
