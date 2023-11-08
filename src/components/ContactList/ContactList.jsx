import React from 'react'
import {  Items, List } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import {  useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.filter)
  
  console.log(contacts)


   const getVisibleContacts = () => {
     const normalaiz = filter.toLocaleLowerCase();

     return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalaiz)
     );
   };

  const visableContacts = getVisibleContacts()
  return (
    <List>
      {visableContacts.map(item => (
        <Items key={item.id}>
          <ContactItem item={item} />
        </Items>
      ))}
    </List>
  );
};

export default ContactList
 