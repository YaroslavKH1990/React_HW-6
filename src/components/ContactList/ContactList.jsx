import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {`${name} : ${number}`}
          {
            <button
              type="button"
              name="delete"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
