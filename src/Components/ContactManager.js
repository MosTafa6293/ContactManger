import React, { useState } from 'react';
import AddPersonForm from '../Components/AddPersonForm';
import PersonList from '../Components/PersonList';

export default function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PersonList data={contacts} />
    </div>
  );
}
