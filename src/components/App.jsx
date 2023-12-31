import React, { useEffect } from 'react';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'components/operations/operations';

const App = () => {
  const filter = useSelector(state => state.filter);

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const getFilterName = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(
    () => {
      dispatch(fetchContacts());
    }, // eslint-disable-next-line
    []
  );
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <FilterName />
        
        <ContactList getFilterName={getFilterName} />
      </div>
    </div>
  );
};

export default App;
