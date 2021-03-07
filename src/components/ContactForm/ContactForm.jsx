import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (name, number) =>
    dispatch(operations.addContact(name, number));

  const newContact = () => {
    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );
    if (name === '' || number === '') {
      alert('Please enter all fields!');
      return true;
    }
    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    resetName();
    resetNumber();
    if (newContact()) {
      return;
    }
    onSubmit(name, number);
  };

  const resetName = () => {
    setName('');
  };
  const resetNumber = () => {
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
