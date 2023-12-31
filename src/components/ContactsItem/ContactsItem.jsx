import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/operations/operations';

export default function ContactsItem({ contacts }) {
  const dispatch = useDispatch();

  return (
    <li>
      {contacts.name}: {contacts.phone}
      <button onClick={() => dispatch(deleteContact(contacts.id))}>
        Delete
      </button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};
