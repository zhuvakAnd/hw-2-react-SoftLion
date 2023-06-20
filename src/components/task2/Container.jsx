import React, { useState } from 'react';
import InputArea from './InputArea';
import Contacts from './Contacts';
import contactIntial from '../task2/contactData.json';

const styles = {
  padding: '10px',
  margin: '10px',
  border: '1px solid black',
  borderRadius: '5px',
  width: '400px',
};
function Container() {
  const [contactData, setContactData] = useState(contactIntial);

  const handleDeletion = data => {
    setContactData(prevContactData =>
      prevContactData.filter(item => item !== data)
    );
  };

  const handleFormSubmit = data => {
    const existingContact = contactData.find(
      contact => contact.name === data.name
    );
    if (existingContact) {
      alert(`${data.name} already exists in the contact list.`);
    } else {
      setContactData(prevContactData => [...prevContactData, data]);
    }
    return existingContact;
  };
  return (
    <div style={styles}>
      <h3>Phonebook</h3>
      <InputArea onSubmit={handleFormSubmit} />
      <Contacts contacts={contactData} onDelete={handleDeletion} />
    </div>
  );
}

export default Container;
