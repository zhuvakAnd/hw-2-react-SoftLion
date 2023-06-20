import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import style from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [contacts, searchText]);

  const handleDeletion = () => {
    onDelete(selectedContact);
    setSelectedContact(null);
  };

  const handleContactClick = contact => {
    setSelectedContact(contact);
  };

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h3>Contact List</h3>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <ol>
        {filteredContacts.map(contact => (
          <li key={nanoid()} className={style.contactItem}>
            <span
              className={style.contactText}
              onClick={() => handleContactClick(contact)}
            >{`${contact.name}   ${contact.phone}`}</span>
            {selectedContact && selectedContact === contact && (
              <button onClick={handleDeletion}>Delete</button>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contacts;
