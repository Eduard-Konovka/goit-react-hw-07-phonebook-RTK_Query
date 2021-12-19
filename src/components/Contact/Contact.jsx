import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contacts/contact-api';
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner/Spinner';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
    toast.success('Contact successfully deleted');
  };

  return (
    <li key={id} className={s.item}>
      <p className={s.text}>{`${name}: ${number}`}</p>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting && <Spinner size={18} />}
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
